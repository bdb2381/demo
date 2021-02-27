import {
  loadToDosInProgress,
  loadToDosSuccess,
  loadToDosFailure,
  createToDo,
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

export const addToDoRequest = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text })
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    })
    const toDo = await response.json()
    dispatch(createToDo(toDo))
  }
  catch (error) {
    dispatch(displayAlert(error)) 
  }
  
}
