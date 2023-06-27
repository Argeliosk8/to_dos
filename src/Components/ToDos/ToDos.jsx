import React from "react";

function ToDos({todo, children}){
    return (
        <div><p>{todo}</p>{children}</div>
    )
}

export default ToDos;