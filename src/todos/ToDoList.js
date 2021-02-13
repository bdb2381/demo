import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos }) => (
  <div className="list-wrapper">
    {todos.map((todo) => (
      <ToDoListItem todo={todo} />
    ))}
  </div>
);

export default ToDoList;
