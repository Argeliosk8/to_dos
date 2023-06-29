import React from "react";

function ToDos({todos, setTodos}){

    function deleteTodo(todoToDelete){
        const updatedTodos = todos.filter((todo)=>todo !== todoToDelete )
        setTodos(updatedTodos)
      }

    function renderTodos (){
        return todos.map((todo, key)=>{
            return (
                <div key={key}>
                    <p>{todo}</p>
                    <button id="deletebutton"onClick={()=>deleteTodo(todo)}>
                    <span class="material-symbols-outlined">delete_forever</span>
                    </button>           
                </div>
            )
        })
    }
    
    return (
        <div className="divtodo">
            {renderTodos()}
        </div>
    )
}

export default ToDos;