import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function FormAnnonce() {
  const [id, setId] = useState("");
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [qteDispo, setQteDispo] = useState("1");

  const { token } = useContext(AuthContext);

  const createAnnonce = (e) => {
    e.preventDefault();
    const annonce = { nom, prix, description, photo, qteDispo };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post("/annonce", annonce, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={createAnnonce}>
      <input
        type="text"
        value={nom}
        placeholder="nom"
        onChange={(e) => setNom(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={prix}
        placeholder="prix"
        onChange={(e) => setPrix(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={description}
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={photo}
        placeholder="photo"
        onChange={(e) => setPhoto(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={qteDispo}
        placeholder="quantité disponible"
        onChange={(e) => setQteDispo(e.target.value)}
      />
      <br />
      <button type="submit">Valider</button>
    </form>
  );
}
