import React from "react";
import { hot } from "react-hot-loader";
import styled from 'styled-components'
import ToDoList from './todos/ToDoList'

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  width: 100vw;
  heigh: 100vh;
`


const App = () => (
  <AppContainer>
    <ToDoList/>
  </AppContainer>
);

export default hot(module)(App);
