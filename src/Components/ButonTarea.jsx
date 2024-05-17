import React from 'react'

const ButonTarea = ({text, setTasks}) => {
  return (
    <>
    <button onClick = {() => setTasks((prevState) => [...prevState, text])}>{text}</button>
    </>
  )
}

export default ButonTarea