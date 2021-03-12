import {createSelector} from 'reselect'

export const getToDos = (state) => state.toDos.data
export const getToDosLoading = (state) => state.toDos.isLoading


//HIGHER ORDER SELECTORS
export const getIncompleteToDos = createSelector(
  getToDos, // first call
  getToDosLoading, // second call
  (toDos) => toDos.filter(toDo => !toDo.isCompleted),
)


export const getCompletedToDos = createSelector(
  getToDos,
  (toDos) => toDos.filter(toDo => toDo.isCompleted)
)


// createSelector memoizes the results
// createSelector takes a variable number of agruments and the last call in the argument list returns the combined result
// export const getIncompleteToDos = createSelector(
//   getToDos, // first call
//   getToDosLoading, // second call
//   //return values from above two func are the agruments for the arrow function
//   (toDos, isLoading) => isLoading
//     ? []
//   : toDos.filter(toDo => !toDo.isCompleted),
// )
