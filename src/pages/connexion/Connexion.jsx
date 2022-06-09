import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = {
      email,
      password,
    };
    axios
      .post("http://localhost:5000/user/login", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.statusText);
        // navigate("/connexion");
      })
      .catch((err) => console.log(err));
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
