import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { Form, Container } from "./styles";

import api from "../../services/api";
import { login } from "../../services/auth";

function SignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        history.push("/app");
      } catch (err) {
        console.log(err);
        setError(
          "Houve um problema com o login, verifique suas credenciais. T.T"
        );
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        {error && <p>{error}</p>}
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
        <button type="submit">Entrar</button>
        <hr />
        <Link to="/signup">Criar conta grátis</Link>
      </Form>
    </Container>
  );
}

export default withRouter(SignUp);
