import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.admin; // Attach the decoded admin info to the request
    next();
  } catch (err) {
    console.error("Invalid token:", err);
    res.status(401).json({ msg: "Token is not valid" });
  }
}
