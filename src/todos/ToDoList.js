import React from "react";
import ToDoListItem from "./ToDoListItem";
import NewToDoForm from "./NewToDoForm"
import "./ToDoList.css";

const ToDoList = ({ todos = [{text: 'Hello'}] }) => {
  // debugger
  return (
  <div className="list-wrapper">
    <NewToDoForm />

    {todos.map((todo, i) => (
      <ToDoListItem todo={todo} key={i} />
    ))}
  </div>
);}

export default ToDoList;
