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
  id,
  setId,
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

  const updateAnnonce = () => {
    if (!id) {
      alert("Veuillez choisir une annonce à modifier");
      return;
    }

    const annonce = { nom, prix, description, photo, qteDispo };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .put(`/annonce/${id}`, annonce, config)
      .then((res) => {
        const tmp = annonces.filter((annonce) => annonce._id !== id);
        setAnnonces([res.data, ...tmp]);
        setNom("");
        setPrix("");
        setDescription("");
        setPhoto("");
        setQteDispo("");
        setId("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
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
      <button onClick={createAnnonce}>Créer l'annonce</button>
      <button onClick={updateAnnonce}>Modifier l'annonce</button>
    </div>
  );
}
