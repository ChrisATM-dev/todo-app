import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { Todo } from './Todo';

export const TodoContainer = () => {

  const [lista, setLista] = useState(() => {
    // Obtener la lista de localStorage solo una vez al cargar el componente
    const savedList = localStorage.getItem('lista');
    return savedList ? JSON.parse(savedList) : [];
  });
  
  const {titulo, descripcion, data, resetData, onInputChange} = useForm({titulo:'', descripcion:''})

  const agregarTarea = () => {
    const newList = [...lista, data];
    setLista(newList);
    resetData();
  }

  const log = () => {
    console.log(lista)
  }

  useEffect(() => {
    if (lista.length > 0) {
      localStorage.setItem('lista', JSON.stringify(lista));
    }
  }, [lista]);
  

  return (
    <>
      <div className='container'>
        <input onChange={onInputChange} className='titulo' value={titulo} type="text" name='titulo' placeholder='Titulo de tarea'/>
        <input onChange={onInputChange} className='descripcion' value={descripcion} type="text" name='descripcion' placeholder='Detalles de tarea'/>
        <button onClick={agregarTarea} className='agregar'>Agregar</button>
        <button onClick={log} className='agregar'>log</button>
      </div>

      {
        lista?.length > 0 && 
        lista.map(({titulo, descripcion}, index)=><Todo key={index} titulo={titulo} descripcion={descripcion}/>)
      }
      
    </>
  )
}
