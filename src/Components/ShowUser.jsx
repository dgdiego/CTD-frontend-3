import React from "react";

const ShowUser = ({user}) => {
    const { name, age, pokemon } = user
  return (
    <>
    <h3>Tu nombre es {name}, tienes {age} {age>1?'años':'año'} y tu pokemón favorito es {pokemon}</h3>
    </>
  )
};

export default ShowUser;
