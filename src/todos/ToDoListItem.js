import React from "react";
import styled from 'styled-components'

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
const CompletedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`

const RemoveButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: red;
  margin-left: 8px;
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
          : <CompletedButton
              onClick={ () => markComplete(toDo.id) }
            >
        Mark Completed
      </CompletedButton>}
      <RemoveButton 
        onClick={ () => onRemovePressed(toDo.id)}
      >
        Remove
      </RemoveButton>
    </ButtonsContainer>
    
    </ItemContainer>
  )
}

export default ToDoListItem
