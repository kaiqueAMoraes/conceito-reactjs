import React from "react";
import api from "../../services/api";

import "./RemoveButton.style.css";

export default function RemoveButton({id}){

  async function handleRemoveRepository(id) {
    api.delete(`/projects/${id}`)
    console.log(id)
  }

  return (
    <button 
      onClick={() => handleRemoveRepository(id)}
      className="remove-button">
      Remover
    </button>
  )
}