import React from 'react'
import { Todo } from './todo'

export const TodoList = ({lista, todoDelete, todoUpdate, filtro, setFiltro}) => {
  const ordenarTareas = (tareas) => {
    return tareas.sort((a, b) => {
      const order = ['', 'en proceso', 'terminado'];
      return order.indexOf(a.estado) - order.indexOf(b.estado);
    });
  };
  
  return (
   <>
    <section>
      <h5>Filtros</h5>
      <div className='contenedor-filtros'>
        <button className='boton-filtro' style={filtro === '' ? {'backgroundColor': "#7a7a7a"} : {} } onClick={() => setFiltro('')}>Todos</button>
        <button className='boton-filtro' style={filtro === 'en proceso' ? {'backgroundColor': "#7a7a7a"} : {} } onClick={() => setFiltro('en proceso')}>En proceso</button>
        <button className='boton-filtro' style={filtro === 'terminado' ? {'backgroundColor': "#7a7a7a"} : {} } onClick={() => setFiltro('terminado')}>Terminados</button>
      </div>
    </section>
      {
      lista?.length > 0 & filtro === '' ? 
      ordenarTareas(lista).map(({titulo, descripcion, estado}, index)=><Todo key={index} titulo={titulo} descripcion={descripcion} estado={estado} todoDelete={todoDelete} todoUpdate={todoUpdate}/>)
      : lista.filter( (tarea) => tarea.estado === filtro)
      .map(({titulo, descripcion, estado}, index)=><Todo key={index} titulo={titulo} descripcion={descripcion} estado={estado} todoDelete={todoDelete} todoUpdate={todoUpdate}/>)
    
      
      }
   </>
  )
}
