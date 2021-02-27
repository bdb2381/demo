import {
  CREATE_TODO,
  REMOVE_TODO,
  ISCOMPLETED_TODO,
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
      const { text } = payload
      return state.map(toDo => {
        if (toDo.text === text) {
          return {...toDo, isCompleted: true}
        }
        return toDo
      })
    }
    
    case LOAD_TODOS_SUCCESS: {
      const { toDos } = payload
      return toDos
    }
    
    case LOAD_TODOS_FAILURE:            
    case LOAD_TODOS_IN_PROGRESS:
    default:
      return state;
  }
};
