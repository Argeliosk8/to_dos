import React from "react";

function Form({todos, setTodos, newTodo, setNewTodo}){

    function handleChange(e){
        setNewTodo(e.target.value)
      }

    function addTodo(e){
        e.preventDefault()
        if(newTodo !== "" && !todos.includes(newTodo)){
          setTodos(oldTodo =>[...oldTodo, newTodo])
          document.getElementById("todoInput").value = ""
        } 
        
        if (newTodo === "") {
          alert('su input esta vacio')
        }
    
        if (todos.includes(newTodo)){
          alert('ese todo ya existe')
        }
        
      }    
    

    return (
        <form onSubmit={addTodo}>
            <input type="text" onChange={handleChange} id='todoInput'></input>
            <button id='addbutton'>
            <span class="material-symbols-outlined">add_comment</span>
            </button>
      </form>
    )
}

export default Form;