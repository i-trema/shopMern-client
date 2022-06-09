import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import FormAnnonce from "./FormAnnonce";
import ListAnnonce from "./ListAnnonce";

export default function Annonce() {
  return (
    <div>
      <FormAnnonce />
      <ListAnnonce />
    </div>
  );
}
