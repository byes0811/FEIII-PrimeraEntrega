import React from "react";

function Card({ marca, modelo, color }) {
  return (
    <div>
      <h2>Registro exitoso</h2>
      <h4>Marca: {marca}</h4>
      <h4>Modelo:{modelo}</h4>
      <h4>El color de tu vehiculo es: </h4>
      <div style={{background:color, padding:"0.2em", border: "solid"}}>
        <h4>{color}</h4>
      </div>
    </div>
  );
}

export default Card;
