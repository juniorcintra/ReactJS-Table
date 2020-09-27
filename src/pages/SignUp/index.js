import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { Form, Container } from "./styles";

import api from "../../services/api";

function SignUp({ history }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setError("Preencha todos os dados para se cadastrar");
    } else {
      try {
        await api.post("/users", { username, email, password });
        history.push("/");
      } catch (err) {
        console.log(err);
        setError("Ocorreu um erro ao registrar sua conta. T.T");
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Nome de usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Endereço de e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <hr />
        <Link to="/">Fazer login</Link>
      </Form>
    </Container>
  );
}

export default withRouter(SignUp);
