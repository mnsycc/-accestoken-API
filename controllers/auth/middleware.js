const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const publicKey = fs.readFileSync(path.join(__dirname, './public.key'));
const verifyOptions = {
  expiresIn: '1h',
  algorithm: ['RS256'],
};

const protectedRoute = (req, res, next) => {
  const bearer = req.cookies;
  console.log('bearer: ', bearer);
  if (bearer) {
    jwt.verify(bearer, publicKey, verifyOptions, (err, decoded) => {
      req.login = decoded;
      next();
    });
  } else {
    res.json({
      message: 'Invalid token!',
    });
  }
};

module.exports = protectedRoute;
