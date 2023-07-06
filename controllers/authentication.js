
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not provided' });
  }
  jwt.verify(token, JWT_SECRET_KEY, (error, decodedToken) => {
    if (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decodedToken;
    next();
  });
}

module.exports = authenticateToken;