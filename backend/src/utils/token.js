import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

const newToken = (payload) => {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '2h',
  };

  const key = fs.readFileSync('jwt.key', 'utf8');

  const token = jwt.sign(payload, key, jwtConfig);

  return token;
};

const validateToken = (token) => {
  const key = fs.readFileSync('jwt.key', 'utf8');

  const decode = jwt.verify(token, key);

  return decode;
};

export { newToken, validateToken };
