import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function ListAnnonce({
  annonces,
  setId,
  setAnnonces,
  setNom,
  setPrix,
  setDescription,
  setPhoto,
  setQteDispo,
}) {
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  //// récupérer les annonces de l'utilisateur connecté :
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/annonce/getAnnonceUser", config)
      .then((res) => {
        setAnnonces(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const deleteAnnonce = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`/annonce/${id}`, config)
      .then((res) => {
        /// utiliser la fonction filter pour ne pas afficher l'élément que l'on veut supprimer
        setAnnonces(annonces.filter((a) => a._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // mettre à jour les informations affichées dans le formulaire
  const updateForm = (annonce) => {
    setNom(annonce.nom);
    setPrix(annonce.prix);
    setDescription(annonce.description);
    setPhoto(annonce.photo);
    setQteDispo(annonce.qteDispo);
    setId(annonce._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {annonces.map((annonce) => {
        return (
          <ul key={annonce._id}>
            <li style={{ fontWeight: "bold" }}>nom : {annonce.nom}</li>
            <li>prix : {annonce.prix}</li>
            <li>description : {annonce.description}</li>
            <li>quantité disponible : {annonce.qteDispo}</li>
            <button onClick={() => deleteAnnonce(annonce._id)}>
              Supprimer
            </button>
            <button onClick={() => updateForm(annonce)}>Modifier</button>
          </ul>
        );
      })}
    </div>
  );
}
