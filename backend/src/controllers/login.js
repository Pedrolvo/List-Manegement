import loginService from '../services/login';

class LoginController {
  login = async ( req, res, next) => {
    try {
      const { email, password } = req.body;
      const sign = await loginService.login(email, password);

      if(!sign) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }

      return res.status(200).json(sign);
    } catch (err) {
      next(err);
    }
  };

  validation = async ( req, res, next) => {
    try {
      const { authorization } = req.headers;

      const sign = await loginService.validation(authorization);
      if (!sign)  return res.status(401).json({ message: 'Invalid Token' });

      return res.status(200).json(sign);
    } catch (err) {
      next(err);
    }
  };

  createUser = async ( req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const newUser = loginService.createUser({ username, email, password });
  
      return res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  };
}

export default new LoginController();
