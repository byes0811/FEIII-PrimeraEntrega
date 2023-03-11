import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [send, setSend] = useState(false);

  const onChangeMarca = (event) => {
    setMarca(event.target.value);
  };

  const onChangeModelo = (event) => {
    setModelo(event.target.value);
  };

  const onChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (marca.trim().length < 3 || modelo.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setSend(false);
    } else {
      setError("");
      setSend(true);
    }
  };

  return (
    <div className="App">
      <h2>Primera Entrega Front End III</h2>
      <h3>Registro del vehiculo</h3>
      <form onSubmit={handleSubmit} style={{background:"#F2F3EF", padding:"1em", border: "solid"}}>
        <input
          type="text"
          size="35"
          placeholder="Marca"
          value={marca}
          onChange={onChangeMarca}
        />
        <br/>
        <input
          type="text"
          size="35"
          placeholder="Modelo"
          value={modelo}
          onChange={onChangeModelo}
        />
        <br/>
        <input
          type="text"
          size="35"
          placeholder="Ingresa el color del vehiculo (formato HEX)"
          value={color}
          onChange={onChangeColor}
        />
        <br/>
        <input type="submit" value="Enviar"></input>
      </form>
      <div className="error">{error}</div>
      {send && <Card marca={marca} modelo={modelo} color={color} />}
    </div>
  );
}

export default App;
