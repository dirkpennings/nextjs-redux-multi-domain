import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const initialState = {}

export function initializeStore(preloadedState = initialState) {
	return createStore(rootReducer, preloadedState, composeWithDevTools())
}
