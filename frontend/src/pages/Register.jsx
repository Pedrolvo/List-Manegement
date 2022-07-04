import { useEffect } from "react";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { requestLoginNew } from "../services/Login";

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreated, setIsCreated] = useState('');
  const [button, setButton] = useState(false);


  useEffect(() => {
    if (
      password.length > 5 &&
      email.length > 5 &&
      username.length > 5
    ) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [email, password, username]);

  const createUser = async (event) => {
    event.preventDefault();

    try {
      const enpoint = '/login/new';

      await requestLoginNew(enpoint, { username, email, password });
      setIsCreated(true);
    } catch (err) {
      setIsCreated(false);
    }
  }

  if (isCreated) return <Navigate to="/" />

  return (
    <>
      <section>
        <form>
          <h1>Área de Cadastro</h1>
          <label htmlFor="username-input">
            <input
              type="text"
              value={ username }
              onChange={ ({ target: { value } }) => setUsername(value) }
              data-testid="register-username-input"
              placeholder="Nome"
            />
          </label>
          <label htmlFor="email-input">
            <input 
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              data-testid="register-email-input"
              placeholder="Email"
              type="text"
            />
          </label>
          <label htmlFor="passqoword-input">
            <input 
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
              data-testid="register-password-input"
              placeholder="Senha"
              type="text" />
          </label>
          <button
            data-testid="register-btn"
            type="submit"
            disabled={!button}
            onClick={ (event) => createUser(event) }
          >
            Registrar
          </button>
        </form>
        <div>
          <p>Já posssui conta?</p>
          <Link to="/">
            Fazer login.
          </Link>
        </div>
      </section>
    </>
  )
}