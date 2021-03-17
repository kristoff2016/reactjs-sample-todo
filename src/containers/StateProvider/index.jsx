import PropTypes from 'prop-types';
import React, { useReducer, createContext } from 'react'
import actions from '../../actions'
import reducers from '../../reducers'

export const StateContext = createContext();
const { Provider } = StateContext
const StateProvider = ({ initialState = {}, children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <Provider value={{ state, actions: actions(dispatch) }}>
      {children}
    </Provider>
  )
}
StateProvider.propTypes = {
  children: PropTypes.element,
  initialState: PropTypes.object,
}
export default StateProvider
