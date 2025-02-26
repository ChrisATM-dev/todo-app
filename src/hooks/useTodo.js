import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/todoReducer"

const getLista = () => {
    const getStorage = localStorage.getItem('lista');
    return getStorage ? JSON.parse(getStorage) : [];
}

export const useTodo = () => {
    const [lista, dispatch] = useReducer(todoReducer, null, getLista);

    const todoAdd = (tarea) => {
        dispatch( { type: 'agregar', payload: tarea} );
    }

    const todoDelete = (titulo) => {
        dispatch( { type: 'eliminar', payload: titulo} );
    }

    const todoUpdate = (titulo, estado) => {
        dispatch( { type: 'editar', payload: {titulo: titulo, estado: estado}} );
    }

    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(lista));
    }, [lista]);
      
    return{
        lista,
        dispatch,
        todoAdd,
        todoDelete,
        todoUpdate
    }
}
