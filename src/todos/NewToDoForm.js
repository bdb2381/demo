import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDoRequest } from "./thunks";
import { getToDos } from "./selectors";
import "./NewToDoForm.css";

const NewToDoForm = ({ toDos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Enter To Do"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = toDos.some(
            (toDo) => toDo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Your To Do
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  toDos: getToDos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addToDoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);
