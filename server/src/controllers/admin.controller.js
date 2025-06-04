// controllers/adminController.js
import Admin from "../models/admin.model.js";
import Order from "../models/order.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Contact from "../models/contact.model.js";
import crypto from "crypto";
import sendEmailWithCode from "../utils/sendEmail.js";
import path from "path";

let pendingUsers = {}; // Temporary store for demo (NOT FOR PROD)

const signup = async (req, res) => {
  const { username, email, password } = req.body;

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

  res.cookie("access_token", token, { httpOnly: true }).status(200).json({
    message: "Email verified successfully.",

    username: newUser.username,
    email: newUser.email,
  });
};

const logOut = async (req, res) => {
  try {
    // res.cookie("access_token", "", {
    //   httpOnly: true,
    //   expires: new Date(0), // Expire immediately
    //   sameSite: "Lax", // Match original cookie options
    //   secure: false, // Or true if you're using HTTPS
    //   path: "/", // Match original cookie path
    // });
    res.clearCookie("access_token", {
      httpOnly: true,
      path: "/",
      sameSite: "Lax",
      secure: false, // Set to true if using HTTPS
    })

    res.status(200).json("You have been successfully logged out");
  } catch (error) {
    // next(error);
    console.log("Error during logout:", error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin) return res.status(400).json({ msg: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ admin: { id: admin._id } }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      path: "/",
    })
    .status(201)
    .json({ email: admin.email, username: admin.username });
};

const saveContact = async (req, res) => {
  const { email, name, mobile, message } = req.body;
  try {
    const newContact = new Contact({
      email,name,mobile,message
    })
    await newContact.save();
    res.status(201).json("Contact saved successfully");
    
  } catch (error) {
    console.log("Error saving contact:", error);
    res.status(401).json("Error saving contact");
    
  }

}

const google = async (req, res) => {
  // res.json({message:"Google Auth not implemented in this version"});
  try {
    const validUser = await Admin.findOne({ email: req.body.email });
    if (validUser) {
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      console.log(validUser._doc);
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(201)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const newUser = new Admin({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(201)
        .json(rest);
    }
  } catch (error) {
    // next(error);
    console.error("Google authentication error:", error);
  }
};

const profile = async (req, res) => {
  try {
    // const user = await Admin.findById(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ message: "Admin not found" });
    // }
    // res.json(user);
  } catch (error) {
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
  logOut,
  updateOrderStatus,
  getOrderStats,
  google,
  saveContact,
};
