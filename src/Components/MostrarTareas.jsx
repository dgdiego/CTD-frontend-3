import React from 'react'

const MostrarTareas = ({tareas}) => {
    console.log(tareas);
  return (
    <>
    <ul>
    {tareas.map( (tarea, index) => (
      <li key={index}>{tarea}</li>  
    ))}
    </ul>
    </>
  )
}

export default MostrarTareas