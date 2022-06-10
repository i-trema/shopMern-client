import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [loading, setLoading] = useState(false);

  const [annonce, setAnnonce] = useState({
    nom: "",
    prix: "",
    description: "",
    photo: "",
    qteDispo: "",
  });
  const { id } = useParams();
  useEffect(() => {
    /// pour utliser un "spinner" ( chargement ) on place setLoading(true) avant chaque "axios",
    /// et on le met false dans le .finally.
    /// ensuite on affiche un composant "Spinner" lorsque loading est true.
    setLoading(true);
    axios
      .get(`/annonce/${id}`)
      .then((res) => {
        setAnnonce(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* {loading && <Spinner />} */}
      Details
      <ul>
        <li style={{ fontWeight: "bold" }}>nom : {annonce.nom}</li>
        <li>prix : {annonce.prix}</li>
        <li>description : {annonce.description}</li>
        <li>quantité disponible : {annonce.qteDispo}</li>
      </ul>
    </div>
  );
}
