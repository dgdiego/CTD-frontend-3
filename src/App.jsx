import { useState } from "react";
import "./App.css";
import Pizza from "./Components/Pizza";

function App() {

  const [cancel, setCancel] = useState(false);

  return (
    <>
      <h1>Su pedido:</h1>
      {!cancel && <Card pedido={"pizzas"}/>}
      <button onClick={() => setCancel(true)}>Cancelar pedido</button>
    </>
  );
}

export default App;
