import React from "react";
import ToDoListItem from "./ToDoListItem";
import NewToDoForm from "./NewToDoForm"
import { connect } from 'react-redux'
import { removeToDo } from './actions'
import "./ToDoList.css";

const ToDoList = ({ toDos = [], onRemovePressed }) => {
console.log("ToDoList comp", toDos)
  return (
    <div className="list-wrapper">
      <NewToDoForm />

      {toDos.map((toDo, i) => {
        return (
        <ToDoListItem 
          toDo={toDo}
          key={i}
          onRemovePressed={onRemovePressed}  
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
    onRemovePressed: text => dispatch(removeToDo(text))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
