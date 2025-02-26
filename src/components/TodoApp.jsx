import React, { useState } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

  const {lista, todoAdd, todoDelete, todoUpdate} = useTodo();

  const [filtro, setFiltro] = useState('');

  
  return (
    <>
      <TodoAdd todoAdd={todoAdd} setFiltro={setFiltro}/>

      <TodoList lista={lista} todoDelete={todoDelete} todoUpdate={todoUpdate} filtro={filtro} setFiltro={setFiltro} />
    </>
  )
}
