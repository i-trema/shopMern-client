import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function ListAnnonce() {
  const [annonces, setAnnonces] = useState([]);

  const { token } = useContext(AuthContext);

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

  return (
    <div>
      {annonces.map((annonce) => {
        return (
          <ul key={annonce._id}>
            <li style={{ fontWeight: "bold" }}>nom : {annonce.nom}</li>
            <li>prix : {annonce.prix}</li>
            <li>description : {annonce.description}</li>
            <li>quantité disponible : {annonce.qteDispo}</li>
          </ul>
        );
      })}
    </div>
  );
}
