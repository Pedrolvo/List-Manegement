import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { requestLogin } from '../services/Login';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    try {
      const endpiont = '/login';

      const { token, user } = await requestLogin(endpiont, { email, password });

      localStorage.setItem('user', JSON.stringify({ token, ...user }));
      setIsLogged(true);
    } catch (err) {
      setFailedLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/lists" />

  return (
    <>
      <section>
        <form>
          <h1>Área de Login</h1>
          <label htmlFor="email-input">
            <input
              // className="login-input"
              type="text"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              data-testid="login-email-input"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="text"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
              data-testid="login-password-input"
              placeholder="Senha"
            />
          </label>
          {
            (failedLogin)
              ? (
                <p data-testid="login-invalid">
                  {
                    `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
                  }
                </p>
              )
              : null
          }
          <button
            data-testid="login-btn"
            type="submit"
            onClick={ (event) => login(event) }
          >
            Entrar
          </button>
        </form>
        <div>
          <p>Não possui conta?</p>
          <Link to="/register">
            Criar conta.
          </Link>
        </div>
      </section>
    </>
  )
}