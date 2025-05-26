import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  isVerified: { type: Boolean, default: false },
  verificationCode: String,
  verificationCodeExpires: Date,
});

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;
