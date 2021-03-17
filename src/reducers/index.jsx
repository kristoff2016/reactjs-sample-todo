import authReducer from './authReducer'

function combineReducers(reducers) {
  return (state, action) =>
    Object.entries(reducers).reduce(
      (allState, [reducerName, reducer]) => ({
        ...state,
        ...allState,
        [reducerName]: reducer(state[reducerName], action)
      }),
      {}
    )
}
export default combineReducers({
  auth: authReducer
})
