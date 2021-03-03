import {
  loadToDosInProgress,
  loadToDosSuccess,
  loadToDosFailure,
  createToDo,
  removeToDo,
  markToDoAsComplete,
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
      method: 'POST',
      body,
    })
    
    const toDo = await response.json()
    console
    dispatch(createToDo(toDo))
  }
  catch (error) {
    dispatch(displayAlert(error)) 
  }
}

export const deleteToDo = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE',
      
    })
    
    const toDo = response.json()
    dispatch(removeToDo(id))
  }
  catch (error) {
    dispatch(displayAlert(error))
  }
}

export const markCompletedThunk = (id) => async (dispatch) => {

  try {
    const dataToUpdate = {id, isCompleted: true }
    const body = JSON.stringify(dataToUpdate)
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body,
    })
    
    const compeletedToDo = response.json()

    dispatch(markToDoAsComplete(compeletedToDo))
    
  } catch (error) {
    
  }
  
}
