import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({todoAdd, setFiltro}) => {

  const {data, titulo, descripcion, onInputChange, resetData} = useForm({titulo:'', descripcion:'', estado:''});

  const onFormSubmit = (e) => {
    e.preventDefault();
    todoAdd(data);
    resetData();
    setFiltro('');
  }

  return (
    <>
      <form className='container' onSubmit={onFormSubmit}>
        <input onChange={onInputChange} className='titulo' value={titulo} type="text" name='titulo' placeholder='Titulo de tarea'/>
        <input onChange={onInputChange} className='descripcion' value={descripcion} type="text" name='descripcion' placeholder='Detalles de tarea'/>
        <button className='agregar'>Agregar</button>
      </form>
    </>
  )
}
