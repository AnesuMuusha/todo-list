import React from 'react';
import './App.css';
import ToDoItem from './Components/ToDoItem';
import ToDoList from './Components/ToDoList';
document.body.style = 'background: dodgerblue;'
//add style on css page

function App() {
  return (
  <>
    <ToDoList/>
    <ToDoItem/>
     </>
    
    );
}

export default App;
