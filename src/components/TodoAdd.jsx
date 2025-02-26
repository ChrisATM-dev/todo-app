import React, { useRef } from 'react'
import { useForm } from '../hooks/useForm';
import { toast } from 'react-toastify';

const ErrorTitulo = () => toast.error("Titulo vacio o ya existe",{position: "top-center", autoClose: 1500});

export const TodoAdd = ({todoAdd, setFiltro, lista}) => {

  const {data, titulo, descripcion, onInputChange, resetData} = useForm({titulo:'', descripcion:'', estado:''});

  const tituloRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Lista', lista)
    console.log('Titulo', titulo.length)

    if(titulo.length > 0){
      if(!(lista.some(tarea => tarea.titulo === titulo))){
        todoAdd(data);
        resetData();
        setFiltro('');
      }else{
        ErrorTitulo();
        tituloRef.current.focus();
      }
    }
    else{
      ErrorTitulo();
      tituloRef.current.focus();
    }

    
    
  }


  return (
    <>
      <form className='container' onSubmit={onFormSubmit}>
        <input ref={tituloRef} onChange={onInputChange} className='titulo' value={titulo} type="text" name='titulo' placeholder='Titulo de tarea'/>
        <input onChange={onInputChange} className='descripcion' value={descripcion} type="text" name='descripcion' placeholder='Detalles de tarea'/>
        <button className='agregar'>Agregar</button>
      </form>
    </>
  )
}
