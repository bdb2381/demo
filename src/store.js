import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {
  toDos,
  isLoading,
} from './todos/reducers'



const reducers = {
  toDos,
};


const persistConfig = {
  key: 'root',
  storage,  // defaults to localStorage
  stateReconciler: autoMergeLevel2 // how deep to reconcile storage
}


const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))


export const configureStore = () => store
