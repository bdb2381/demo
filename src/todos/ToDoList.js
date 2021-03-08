import React, {useEffect} from "react";
import ToDoListItem from "./ToDoListItem";
import styled from 'styled-components'
import NewToDoForm from "./NewToDoForm"
import { connect } from 'react-redux'
import {
  displayAlert,
  loadToDos,
  deleteToDo,
  markCompletedThunk,
} from './thunks'
import {
  getToDosLoading,
  getIncompleteToDos,
  getCompletedToDos,
} from './selectors'

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const ToDoList = ({
  toDosIncomplete,
  toDosCompleted,
  onRemovePressed,
  markComplete,
  isLoading,
  startLoadingToDos,
}) => {
  
  useEffect(() => {
    startLoadingToDos()
  }, [])
  
  const loadingMessage = <div>"Loading To Dos...."</div>

  const content = (
<ListWrapper>
      <NewToDoForm />

      <h3>To Dos Remaining</h3>
      {toDosIncomplete.map((toDo, i) => {
        return (
          <ToDoListItem
            toDo={toDo}
            key={i}
            onRemovePressed={ onRemovePressed }
            markComplete={ markComplete } 
         />
        )
      })}
      
      <h3>Completed ToDos</h3>
      {toDosCompleted.map((toDo, i) => {
        return (
        <ToDoListItem 
          toDo={toDo}
          key={i}
          onRemovePressed={ onRemovePressed }  
        />
        )}
      )}
      
      
      
      
      
      
    </ListWrapper>
  );
  
  return isLoading ? loadingMessage : content
}


const mapStateToProps = state => ({
  toDosCompleted: getCompletedToDos(state),
  toDosIncomplete: getIncompleteToDos(state),
  isLoading: getToDosLoading(state)
})

const mapDispatchToProps = dispatch => (
  {
    onRemovePressed: (id) => dispatch(deleteToDo(id)),
    markComplete: (id) => dispatch(markCompletedThunk(id)),
    // markComplete: (text) => dispatch(markToDoAsComplete(text)),
    onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
    startLoadingToDos: () => dispatch(loadToDos()),
    // onCompletedPressed: () => 
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
