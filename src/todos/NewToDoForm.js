import React, { useState } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { addToDoRequest } from "./thunks";
import { getToDos } from "./selectors";

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;


  `;
  
const ToDoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid white;
  border-radius: 8px;
  width: 70%;
  outline: none;
`

const NewToDoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  background-color: #22ee22;
`

const NewToDoForm = ({ toDos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <FormContainer>
      <ToDoInput
        type="text"
        placeholder="Enter To Do"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <NewToDoButton
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
      </NewToDoButton>
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  toDos: getToDos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addToDoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);
