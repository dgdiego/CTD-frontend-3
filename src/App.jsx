import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

// import Pepito, {OtroEjemplo} from './Components/Ejemplo'
//import {OtroElemento} from './Components/Ejemplo' NO FUNCIONA PORQUE NO TIENE EL EXPORT EN EJEMPLO.JSX

import "./App.css";
import ButonTarea from "./Components/ButonTarea";
import MostrarTareas from "./Components/MostrarTareas";
//import Parent from './Components/Parent'

function App() {
  // const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <ButonTarea text={"Hacer la cama"} setTasks={setTasks} />
      <ButonTarea text={"Leer playground"} setTasks={setTasks} />
      <ButonTarea text={"Comer la cena"} setTasks={setTasks} />

      <MostrarTareas tareas={tasks}/>
    </>
  );
}

export default App;
