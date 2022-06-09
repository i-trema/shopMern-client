import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function NavBar() {
  // on récupère le token du contexte.
  // si on est connecté, afficher Annonces et Logout
  // sinon, afficher Connexion et Inscription.

  /// on initialise token avec la valeur stockée dans le LocalStorage

  const { token, setToken } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <nav>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li hidden={token}>
        <Link to="/connexion">Connexion</Link>
      </li>
      <li hidden={token}>
        <Link to="/inscription">Inscription</Link>
      </li>
      <li hidden={!token}>
        <Link to="/annonces">Annonces</Link>
      </li>
      <li hidden={!token}>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      </li>
    </nav>
    //   <nav>
    //   <h1>
    //     <Link to="/"> Accueil </Link>
    //   </h1>
    //   {token ? (
    //     <>
    //       <Link to="/annonce"> Annonce </Link>
    //       <Link to="/"> Logout </Link>
    //     </>
    //   ) : (
    //     <>
    //       <Link to="/connexion"> Connexion </Link>
    //       <Link to="/inscription"> Inscription </Link>
    //     </>
    //   )}
    // </nav>
  );
}
