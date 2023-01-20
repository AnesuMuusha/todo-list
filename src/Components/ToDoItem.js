import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./ToDoItem.css";

const ToDoItem = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
    alert("deleting Item")
  };

  

  return (
    <div className="todo-bg">
      <div>
        <h1>To Do List</h1>
        <TextField
          className="todo-bg_textfield"
          helperText="Add to your schedule"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="outlined-basic"
          label="Add a task here"
          variant="outlined"
        />
        <Button variant="contained" onClick={() => addTodo(input)}>
          +
        </Button>
        <ul
          style={{
            lineStyle: "none"
          }}
        >

          {list.map((todo) => (
          
          <li key={todo.id}>
             
              {todo.todo}
             
              <button className="btn" btn onClick={() => deleteTodo(todo.id)}>
                &times;
              </button>
          
            </li>
          ))}
        
        </ul>
      
      </div>
    </div>
  );
};

export default ToDoItem;
