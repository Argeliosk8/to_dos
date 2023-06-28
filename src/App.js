import './App.css';
import ToDos from './Components/ToDos/ToDos';
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  function handleChange(e){
    setNewTodo(e.target.value)
  }

  function addTodo(e){
    e.preventDefault()
    if(newTodo !== "" && !todos.includes(newTodo)){
      setTodos(oldTodo=>[...oldTodo, newTodo])
      document.getElementById("todoInput").value = ""
      setNewTodo("")
    } 
    
    if (newTodo === "") {
      alert('su input esta vacio')
    }

    if (todos.includes(newTodo)){
      alert('ese todo ya existe')
    }
    
  }

  function deleteTodo(todoToDelete){
    const updatedTodos = todos.filter((todo)=>todo !== todoToDelete )
    setTodos(updatedTodos)
  }

  function renderTo_Dos(){
    return todos.map((todo, key)=>{
      return (
        <ToDos key={key} todo={todo}>
          <button id="deletebutton"onClick={()=>deleteTodo(todo)}>
          <span class="material-symbols-outlined">delete_forever</span>
          </button>        
        </ToDos>
      )
    })
  }

  return (
    <div className="App">
      <h1>Your to-do's!</h1>
      <form onSubmit={addTodo}>
            <input type="text" onChange={handleChange} id='todoInput'></input>
            <button id='addbutton'>
            <span class="material-symbols-outlined">add_comment</span>
            </button>
      </form>
      <div className='divtodo'>
        {renderTo_Dos()}
      </div>
    </div>
  );
}

export default App;
