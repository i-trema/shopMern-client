import { useState } from "react";
import FormAnnonce from "./FormAnnonce";
import ListAnnonce from "./ListAnnonce";

export default function Annonce() {
  const [annonces, setAnnonces] = useState([]);
  const [id, setId] = useState("");
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [qteDispo, setQteDispo] = useState("1");

  return (
    <div>
      <FormAnnonce
        annonces={annonces}
        setAnnonces={setAnnonces}
        nom={nom}
        setNom={setNom}
        prix={prix}
        setPrix={setPrix}
        description={description}
        setDescription={setDescription}
        photo={photo}
        setPhoto={setPhoto}
        qteDispo={qteDispo}
        setQteDispo={setQteDispo}
      />
      <ListAnnonce
        annonces={annonces}
        setAnnonces={setAnnonces}
        setNom={setNom}
        setPrix={setPrix}
        setDescription={setDescription}
        setPhoto={setPhoto}
        setQteDispo={setQteDispo}
        setId={setId}
      />
    </div>
  );
}
