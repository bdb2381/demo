import { CREATE_TODO, REMOVE_TODO } from "./actions";

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
    
    default:
      return state;
  }
};
