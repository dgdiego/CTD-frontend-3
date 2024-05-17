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
      {/* <OtroElemento/> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <Parent/> */}

      <ButonTarea text={"Hacer la cama"} setTasks={setTasks} />
      <ButonTarea text={"Leer playground"} setTasks={setTasks} />
      <ButonTarea text={"Comer la cena"} setTasks={setTasks} />

      <MostrarTareas tareas={tasks}/>
    </>
  );
}

export default App;
