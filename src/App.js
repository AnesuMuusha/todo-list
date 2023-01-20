import React from "react";
import "./App.css";
import ToDoItem from "./Components/ToDoItem";
import ToDoList from "./Components/ToDoList";
function App() {
  return (
    <>
      <ToDoList />
      <ToDoItem />
    </>
  );
}

export default App;
