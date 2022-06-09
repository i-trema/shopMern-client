import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken } = useContext(AuthContext);

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
      .then((resultat) => {
        // sauvgarder le token dans le Local Storage
        // sauvegarder le token dans le contexte de l'appli
        // rediriger vers l'accueil

        localStorage.setItem("token", resultat.data);
        setToken(resultat.data);
        // console.log(token);

        navigate("/");
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
