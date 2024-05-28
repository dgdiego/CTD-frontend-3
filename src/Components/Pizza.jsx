import React from "react";
import { useState, useEffect } from "react";

const Pizza = ({ pedido }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("El componente fue montado");
    setTimeout(() => {
      setShow(true);
      console.log("El componente fue actualizado");
    }, 2000);
  }, []);

  useEffect(() => {
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return <>{show && <p>{pedido}</p>}</>;
};

export default Pizza;
