import React from 'react';
import './App.css';
import ToDoItem from './Components/ToDoItem';
import ToDoList from './Components/ToDoList';

function App() {
  return (
  <React.Fragment>
    <ToDoList/>
    <ToDoItem/>
    </React.Fragment>
    
    );
}

export default App;
