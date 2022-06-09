import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/connexion">Connexion</Link>
      </li>
      <li>
        <Link to="/inscription">Inscription</Link>
      </li>
    </div>
  );
}