import './App.css';
import ToDos from './Components/ToDos/ToDos';
import Form from './Components/Form/Form';
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  return (
    <div className="App">
      <h1>Your to-do's!</h1>
      <Form todos={todos} setTodos={setTodos} newTodo={newTodo} setNewTodo={setNewTodo}/>
      <ToDos todos={todos} setTodos={setTodos}/>    
    </div>
  );
}

export default App;
