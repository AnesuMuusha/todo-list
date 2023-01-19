import React from 'react';
import './App.css';
import ToDoItem from './Components/ToDoItem';
import ToDoList from './Components/ToDoList';
{document.body.style = 'background: dodgerblue;'}

function App() {
  return (
  <>
    <ToDoList/>
    <ToDoItem/>
     </>
    
    );
}

export default App;
