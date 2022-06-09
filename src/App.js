import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Connexion from "./pages/connexion/Connexion";
import Inscription from "./pages/inscription/Inscription";
import Accueil from "./pages/accueil/Accueil";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Annonce from "./pages/annonce/Annonce";

function App() {
  const initToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";

  const [token, setToken] = useState(initToken);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ token, setToken }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="annonce" element={<Annonce />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
