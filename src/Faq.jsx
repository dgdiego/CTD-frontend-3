import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {preguntas} from "./utils/preguntas";

const Faq = () => {
  //Acceso a los parámetros de la ruta actual para manejar rutas dinámicas  
  const params = useParams();
  //console.log(params);

  const pregunta = preguntas.find(
    (pregunta) => pregunta.id === parseInt(params.id)
  );

  //interacción con el history api del navegador
  const navigate = useNavigate();
  // ej <button onClick={() => navigate(1)}>Go forward</button>

  return (
    <div>
      <h1>FAQ: desde la pregunta específica {params.id}</h1>
      <section>
        <h3>{pregunta?.title}</h3>
        <p>{pregunta?.descripcion}</p>
      </section>
      <button onClick={() => navigate(-1)}>Go back 1 </button>
      <button onClick={() => navigate(-2)}>Go further back</button>
    </div>
  );
};

export default Faq;
