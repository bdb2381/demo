import React, {useEffect} from "react";
import ToDoListItem from "./ToDoListItem";
import NewToDoForm from "./NewToDoForm"
import { connect } from 'react-redux'
import {
  displayAlert,
  loadToDos,
  deleteToDo,
  markCompletedThunk,
} from './thunks'
import {
  getToDos,
  getToDosLoading,
} from './selectors'
import "./ToDoList.css";


const ToDoList = ({
  toDos = [],
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
    <div className="list-wrapper">
      <NewToDoForm />

      {toDos.map((toDo, i) => {
        return (
        <ToDoListItem 
          toDo={toDo}
          key={i}
          onRemovePressed={ onRemovePressed }  
          markComplete={ markComplete } 
        />
        )}
      )}
    </div>
  );
  
  return isLoading ? loadingMessage : content
}


const mapStateToProps = state => ({
  toDos: getToDos(state),
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
