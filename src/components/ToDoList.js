import React from 'react';
import Todo from './Todo';




function ToDoList({todos, setTodos, filteredTodos}) {
    return (
      <div>
         {filteredTodos.map((todo) => (
            <Todo key={todo.id} text={todo.text} time={todo.time} todo={todo} todos = {todos} setTodos={setTodos}/>
         ))}
      </div>
    );
  }
  
  export default ToDoList;