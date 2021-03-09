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
const ToDoItemContainerWithWarning = styled(ItemContainer)`
  border-bottom: ${ props =>
  (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
    ? 'none'
    : '2px solid red') };
`;


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
  outline: none;
  cursor: pointer;
  display: inline-block;
`


const CompletedButton = styled(Button)`
  background-color: #22ee22;
`

const RemoveButton = styled(Button)`
  background-color: red;
  margin-left: 8px;
`

const ToDoListItem = ({
  toDo,
  onRemovePressed,
  markComplete,
}) => {
  
  const Container = toDo.isCompleted
    ? ItemContainer
    : ToDoItemContainerWithWarning
  
  return(
    <Container
      createdAt={ toDo.createdAt }>
      <h3>{toDo.text}</h3>
      <p>
          Created On:&nbsp; 
        { 
            (new Date(toDo.createdAt)).toLocaleDateString()
        }   
      </p>
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
      
    </Container>
  )
}

export default ToDoListItem
