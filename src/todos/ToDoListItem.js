import React from "react";
import styled from 'styled-components'
import './ToDoListItem.css'

const ItemContainer = styled.div`
  background: white;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`
const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
`
const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
`

const ToDoListItem = ({
  toDo,
  onRemovePressed,
  markComplete,
}) => {
  
  
  return(
<ItemContainer>
    <h3>{toDo.text}</h3>
    
    <ButtonsContainer>
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
    </ButtonsContainer>
    
    </ItemContainer>
  )
}

export default ToDoListItem
