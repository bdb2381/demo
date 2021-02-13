import React from "react";
import ToDoListItem from "./ToDoListItem";
import './ToDoList.css'

const ToDoList = ({ todos }) => (
  <div className="list-wrapper">
    {todos.map((todo) => (
      <ToDoListItem todo={todo} />
    ))}
  </div>
);

export default ToDoList;
