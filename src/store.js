import { createStore, combineReducers, combineReducers } from "redux";
import {toDos} from './todos/reducers'


const reducers = {
  toDos,
};
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer)
