import React from "react";
import ToDoListItem from "./ToDoListItem";
import NewToDoForm from "./NewToDoForm"
import { connect } from 'react-redux'
import {displayAlert} from './thunks'
import {
  removeToDo,
  markToDoAsComplete,
} from './actions' // action creators, used in mapDispatch
import "./ToDoList.css";


const ToDoList = ({
  toDos = [],
  onRemovePressed,
  markComplete,
}) => {

  console.log("ToDoList comp", toDos)

  return (
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
}


const mapStateToProps = state => ({
  toDos: state.toDos,
})

const mapDispatchToProps = dispatch => (
  {
    onRemovePressed: (text) => dispatch(removeToDo(text)),
    markComplete: (text) => dispatch(markToDoAsComplete(text)),
    onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
