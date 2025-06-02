import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided or format is incorrect' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.admin;
    console.log('User authenticated:', req.user);
    next();
  } catch (err) {
    console.error('Invalid token:', err);
    res.status(401).json({ message: 'Invalid token' });
  }
}
