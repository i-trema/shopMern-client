import React, { useState } from "react";

export default function Annonce() {
  const [id, setId] = useState("");
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [qteDispo, setQteDispo] = useState("");

  const createAnnonce = (e) => {
    e.preventDefault();
    console.log(nom, prix, description, photo, qteDispo);
  };
  return (
    <div>
      Annonce
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
    </div>
  );
}
