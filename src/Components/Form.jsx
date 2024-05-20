import React, { useState } from "react";
import ShowUser from "./ShowUser";

const Form = () => {
  const [user, setUser] = useState({
    name:"",
    age:0,
    pokemon:""
  });
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false)

  const handleName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const handleAge = (e) => {
    setUser({ ...user, age: e.target.value });
  };
  const handlePokemon = (e) => {
    setUser({ ...user, pokemon: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateInputs()){
        setShow(true)
        //console.log(show); POR QUÉ ES QUE NO SE MUESTRA TRUE cuando cambia de valor?
        setError(false)
    }else{
        setShow(false)
        setError(true)
    }
    
  };

  const validateInputs = () =>{
       return user.name.trim().length > 3 && 
              user.age > 0 &&
              user.pokemon.trim().length > 2
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo:</label>
        <input type="text" value={user.name} onChange={handleName} />
        <label>Edad:</label>
        <input type="text" value={user.age} onChange={handleAge} />
        <label>Pokemón favorito</label>
        <input type="text" value={user.pokemon} onChange={handlePokemon} />
        <button>Enviar</button>
      </form>
      {show && <ShowUser user={user}/>}
      {error && (
         <p style={{ color: "red" }}>
         Debe colocar la información correctamente
       </p>
      )}
    </>
  );
};

export default Form;
