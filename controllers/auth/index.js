const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const privateKey = fs.readFileSync(path.join(__dirname, './private.key'));

const sighnOptions = {
  expiresIn: '1h',
  algorithm: 'RS256',
};

const getAccesToken = (userid) => {
  const payload = { sub: userid };
  const token = jwt.sign(payload, privateKey, sighnOptions);
  return token;
};
module.exports = getAccesToken;
