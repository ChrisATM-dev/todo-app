import './App.css';
import { TodoApp } from "./components/TodoApp";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <h1>TODO list</h1>
      <hr />
      <TodoApp/>

      <ToastContainer/>
    </>
  )
}

export default App
