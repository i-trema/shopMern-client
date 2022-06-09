import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inscription = () => {
  //// on peut aussi mettre tous les inputs dans la même variable
  //// on fera référence aux inputs avec "inputs.fullname" .....
  // const [inputs, setInputs] = useState({
  //   fullname: "",
  //   email: "",
  //   password: "",
  // });

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullname, email, password);
    const user = {
      fullname,
      email,
      password,
    };
    axios
      .post("http://localhost:5000/user/register", user)
      .then(() => navigate("/connexion"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nom complet..."
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />
        <br />
        <br />

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

export default Inscription;
