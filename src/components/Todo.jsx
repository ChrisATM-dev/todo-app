import React from 'react'

export const Todo = ({titulo, descripcion, estado, todoDelete, todoUpdate}) => {
  return (
    <>
      <div className={`container-tarea ${estado.split(" ").join("")}`}>
        <div className='container-tarea-texto'>
          <h4>{titulo}</h4>
          <p>{descripcion}</p>
        </div>
        <div className='container-tarea-acciones'>
          {
            estado !== '' && (<button className='' onClick={()=>todoUpdate(titulo, '')}>pendiente</button>)
          }
          {
            estado !== 'terminado' && (<button className='terminado' onClick={()=>todoUpdate(titulo, 'terminado')}>listo</button>)
          }
          {
            estado !== 'en proceso' && (<button className='enproceso' onClick={()=>todoUpdate(titulo, 'en proceso')}>en proceso</button>)
          }
          <button className='eliminar' onClick={()=>todoDelete(titulo)}>eliminar</button>

        </div>
      </div>

    </> 
  )
}
