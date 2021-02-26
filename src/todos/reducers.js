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
      const {text} = payload
      const newToDo = {
        text,
        isCompleted: false
      }
      return state.concat(newToDo)
    }
    
    case REMOVE_TODO: {
      const {text} = payload
      return state.filter(toDo => toDo.text !== text)        
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
            
    default:
      return state;
  }
};
