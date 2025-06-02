// controllers/adminController.js
import Admin from "../models/admin.model.js";
import Order from "../models/order.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmailWithCode from "../utils/sendEmail.js";
import Address from "../models/address.model.js";

let pendingUsers = {}; // Temporary store for demo (NOT FOR PROD)

const signup = async (req, res) => {
  const { username, email, password } = req.body;
 console.log("Signup request received:", { username, email });
  try {
    let existingUser = await Admin.findOne({ email });
    if (existingUser) {
      if (existingUser.isVerified) {
        return res
          .status(400)
          .json({ message: "User already exists and is verified." });
      } else {
        const verificationCode = Math.floor(
          100000 + Math.random() * 900000
        ).toString();
        existingUser.verificationCode = verificationCode;
        await existingUser.save();
        await sendEmailWithCode(email, verificationCode);
        return res
          .status(200)
          .json({ message: "Verification code resent to your email." });
      }
    }

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    pendingUsers[email] = {
      username,
      email,
      password,
      verificationCode,
    };
console.log("Pending user created:", pendingUsers[email]);
    await sendEmailWithCode(email, verificationCode);

    res.status(200).json({
      message: "Signup initiated. Please verify your email.",
      email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during signup." });
  }
};

const verifyEmail = async (req, res) => {
  const { email, code } = req.body;

  const pendingUser = pendingUsers[email];
  if (!pendingUser || pendingUser.verificationCode !== code) {
    return res.status(400).json({ message: "Invalid code or email." });
  }

  const hashedPassword = await bcrypt.hash(pendingUser.password, 10);

  const newUser = new Admin({
    username: pendingUser.username,
    email: pendingUser.email,
    password: hashedPassword,
    isVerified: true,
  });

  await newUser.save();
  delete pendingUsers[email];

  const token = jwt.sign(
    { admin: { id: newUser._id } },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );

  res.status(200).json({
    message: "Email verified successfully.",
    token,
    username: newUser.username,
    email: newUser.email,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin) return res.status(400).json({ msg: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ admin: { id: admin.id } }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  res.json({ email: admin.email, token, username: admin.username});
};
// Save Firebase user to MongoDB

export const saveFirebaseUser = async (req, res) => {
  const { uid, email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    let user = await Admin.findOne({ email });

    if (!user) {
      user = new Admin({ uid, email, isVerified: true });
      await user.save();
    }
    const token = jwt.sign({ admin: { id: user.id } }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.status(200).json({ message: "User saved to MongoDB", user,token });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ message: "MongoDB Save Failed" });
  }
};

const profile = async (req, res) => {
  try {
    const user = await Admin.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(user);
    //console.log("User profile accessed:", user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateAddress = async (req, res) => {
  const { street, city, state, zipCode, country } = req.body;
  const userId = req.user.id;

  try {
    const admin = await Admin.findById(userId);
    if (!admin) return res.status(404).json({ message: "User not found" });

    let addressDoc = await Address.findOne({ user: userId });
    const newAddress = { street, city, state, zipCode, country };

    if (addressDoc) {
      // Check if the same address already exists
      const isDuplicate = addressDoc.addresses.some(addr =>
        addr.street === street &&
        addr.city === city &&
        addr.state === state &&
        addr.zipCode === zipCode &&
        addr.country === country
      );

      if (isDuplicate) {
        return res.status(409).json({ message: "Address already exists" });
      }

      // Add only if not duplicate
      addressDoc.addresses.push(newAddress);
    } else {
      // Create new document if none exists
      addressDoc = new Address({
        user: userId,
        addresses: [newAddress],
      });
    }

    await addressDoc.save();
    res.json(addressDoc);
  } catch (error) {
    console.error("Update address error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



export const getAddress = async (req, res) => {
  const userId = req.user.id;

  try {
    const addressDoc = await Address.findOne({ user: userId });

    if (!addressDoc || addressDoc.addresses.length === 0) {
      return res.status(404).json({ message: "No addresses found for user" });
    }

    res.status(200).json({ addresses: addressDoc.addresses });
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const getOrders = async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
};

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Order.findByIdAndUpdate(id, { status });
  res.json({ msg: "Status updated" });
};

const getOrderStats = async (req, res) => {
  const pipeline = [{ $group: { _id: "$status", count: { $sum: 1 } } }];
  const stats = await Order.aggregate(pipeline);
  res.json(stats);
};
export default {
  signup,
  verifyEmail,
  login,
  profile,
  getOrders,
  updateOrderStatus,
  getOrderStats,
  
};
