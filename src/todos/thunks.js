import {
  loadToDosInProgress,
  loadToDosSuccess,
  loadToDosFailure
} from './actions'

export const displayAlert = (text) => () => {
  alert(`Error: ${text}`)
}


export const loadToDos = () => async(dispatch, getState) => {
  try{
    dispatch(loadToDosInProgress())
    const response = await fetch("http://localhost:8080/todos")
    const toDos = await response.json()
    
    dispatch(loadToDosSuccess(toDos))
  }
  catch (error) {
    dispatch(loadToDosFailure())
    dispatch(displayAlert(error))
  } 
  
  
  
  
}
