import React from 'react'

export const Todo = ({titulo, descripcion}) => {
  return (
    <>
      <div className='container-tarea'>
        <h5>{titulo}</h5>
        <p>{descripcion}</p>
      </div>
    </>
  )
}
