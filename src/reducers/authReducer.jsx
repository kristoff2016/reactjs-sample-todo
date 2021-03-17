import { AUTH_USER } from '../actions/actionTypes'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
export default reducer
