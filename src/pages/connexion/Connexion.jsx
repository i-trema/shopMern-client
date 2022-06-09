import React, { useState } from "react";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="mot de passe..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />

        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Connexion;
