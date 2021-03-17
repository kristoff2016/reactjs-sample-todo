import * as authAction from './authAction'

function toReducerAction(dispatch, action) {
	return (...args) => dispatch(action(...args))
}

function combineActions(dispatch) {
	const allActions = {
		...authAction
	}
	return Object.entries(allActions).reduce(
		(actions, [ actionName, action ]) => ({
			...actions,
			[actionName]: toReducerAction(dispatch, action)
		}),
		{}
	)
}
export default combineActions
