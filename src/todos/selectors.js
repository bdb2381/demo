import {createSelector} from 'reselect'

export const getToDos = (state) => state.toDos.data
export const getToDosLoading = (state) => state.toDos.isLoading
export const getIncompleteToDos = (state) => createSelector(
  getToDos, // first call
  getToDosLoading, // second call
  //return values from above two func are the agruments for the arrow function
  // createSelector takes a variable number of agruments and the last call in the argument list returns the combined result
  (toDos, isLoading) => isLoading
    ? []
  : toDos.filter(toDo => !toDo.isCompleted),
)
