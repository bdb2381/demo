import React from "react";
import './ToDoListItem.css'

const ToDoListItem = ({ toDo, onRemovePressed }) => {
  console.log("ToDoListItem", toDo)
  return(
  <div className="todo-item-container">
    <h3>{toDo.text}</h3>
    
    <div className="buttons-container">
      <button className="completed-button">
        Mark Completed
      </button>
      <button 
        className="remove-button"
        onClick={ () => onRemovePressed(toDo.text)}
      >
        Remove
      </button>
    </div>
    
  </div>
)}

export default ToDoListItem
