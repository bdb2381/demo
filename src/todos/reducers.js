import {
  CREATE_TODO,
  REMOVE_TODO,
  ISCOMPLETED_TODO,
  ISCOMPLETED_TODO_STARTED,
  ISCOMPLETED_TODO_FAILED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,  
} from "./actions";


export const isLoading = (state = false, action) => {
  const {
    type,
    payload,
  } = action

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS: {
      return true
    }

    case LOAD_TODOS_SUCCESS: {
      return false
    }
    case LOAD_TODOS_FAILURE: {
      return false 
    }
    default: {
      return state
    }
  }
}


export const toDos = (state = [], action) => {
  const { 
    type, 
    payload, 
  } = action;

  switch (type) {
    case CREATE_TODO: {
      const {toDo} = payload
      return state.concat(toDo)
    }
    
    case REMOVE_TODO: {
      const {id} = payload
      return state.filter(toDo => toDo.id !== id)        
    }
      
    case ISCOMPLETED_TODO: {
      const { completedToDo } = payload
      return state.map(toDo => {
        if (toDo.id === completedToDo.id) {
          return {...toDo, isCompleted: true}
        }
        return toDo
      })
    }
    
    case LOAD_TODOS_SUCCESS: {
      const { toDos } = payload
      return toDos
    }

    case ISCOMPLETED_TODO_STARTED:
    case ISCOMPLETED_TODO_FAILED:
    case LOAD_TODOS_FAILURE:            
    case LOAD_TODOS_IN_PROGRESS:
    default:
      return state;
  }
};
