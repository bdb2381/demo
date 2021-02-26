import React, {useEffect} from "react";
import ToDoListItem from "./ToDoListItem";
import NewToDoForm from "./NewToDoForm"
import { connect } from 'react-redux'
import {
  displayAlert,
  loadToDos,
} from './thunks'
import {
  removeToDo,
  markToDoAsComplete,
} from './actions' // action creators, used in mapDispatch
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
  toDos: state.toDos,
  isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => (
  {
    onRemovePressed: (text) => dispatch(removeToDo(text)),
    markComplete: (text) => dispatch(markToDoAsComplete(text)),
    onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
    startLoadingToDos: () => dispatch(loadToDos()),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
