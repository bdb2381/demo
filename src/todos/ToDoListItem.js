import React from "react";
import './ToDoListItem.css'

const ToDoListItem = ({
  toDo,
  onRemovePressed,
  markComplete,
}) => {
  
  console.log("ToDoListItem", toDo)
  
  return(
  <div className="todo-item-container">
    <h3>{toDo.text}</h3>
    
    <div className="buttons-container">
        { toDo.isCompleted 
          ? null 
          : <button
              className="completed-button"
              onClick={ () => markComplete(toDo.id) }
            >
        Mark Completed
      </button>}
      <button 
        className="remove-button"
        onClick={ () => onRemovePressed(toDo.id)}
      >
        Remove
      </button>
    </div>
    
  </div>
)}

export default ToDoListItem
