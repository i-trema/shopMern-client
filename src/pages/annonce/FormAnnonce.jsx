import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function FormAnnonce({
  annonces,
  setAnnonces,
  nom,
  setNom,
  prix,
  setPrix,
  description,
  setDescription,
  photo,
  setPhoto,
  qteDispo,
  setQteDispo,
}) {
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
      .then((res) => {
        // ajouter le res.data a notre liste d'affichage.
        // on crée une liste avec le res.data et le reste des annonces :
        setAnnonces([res.data, ...annonces]);
        setNom("");
        setPrix("");
        setDescription("");
        setPhoto("");
        setQteDispo("");
      })
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
