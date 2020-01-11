import React, { useState } from "react";

import api from "../../services/api";

import { Container } from "./styles";

import logo from "../../assets/logo.svg";

export default function SignIn({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/devs", { username });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Digite seu usuário do GitHub"
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
