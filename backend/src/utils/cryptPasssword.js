const Bcrypt = require('bcryptjs');

const crypto = (password, hash)=> {
  const response = Bcrypt.compareSync(password, hash);
  return response;
}

const createhash = async (password)=> {
  const hash = await Bcrypt.hash(password, 1);
  return hash;
}
module.exports = { crypto, createhash };
