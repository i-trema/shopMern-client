import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Accueil = () => {
  const [annonces, setAnnonces] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/annonce")
      .then((res) => {
        setAnnonces(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      Accueil
      {annonces.map((annonce) => {
        return (
          <ul key={annonce._id}>
            <li style={{ fontWeight: "bold" }}>nom : {annonce.nom}</li>
            <li>prix : {annonce.prix}</li>
            <li>description : {annonce.description}</li>
            <li>quantité disponible : {annonce.qteDispo}</li>
            <button onClick={() => navigate(`/annonce/${annonce._id}`)}>
              Détails
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default Accueil;
