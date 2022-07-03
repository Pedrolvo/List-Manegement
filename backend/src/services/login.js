const  { users } = require('../database/models');
const { crypto, createhash } = require('../utils/cryptPasssword');
const { newToken, validateToken } = require('../utils/token');


class LoginService {

  login = async (email, password) => {
    const user = await users.findOne({ where: { email } });
    if (!user) return null;

    const compare = crypto(password, user.password);
    if (!compare) return null;

    const token = newToken({ data: { id: user.id } });
    
    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    }
  };

  validation = async (token) => {
    if (!token) return null;

    const decodeToken = validateToken(token);
    const user = await users.findOne({ where: { id: decodeToken.data.id } });

    if(!user) return null;

    return user.username
  };


  createUser = async (userInfo) => {
    const encryptPassword = createhash(userInfo.password);
    const newUser = await users.create({
      username: userInfo.username,
      email: userInfo.email,
      password: encryptPassword });
    
    return newUser;
  }
}

export default new LoginService();
