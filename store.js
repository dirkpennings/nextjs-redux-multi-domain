import { createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

export const initializeStore = (preloadedState = initialState) => {
	return createStore(rootReducer, preloadedState, composeWithDevTools())
}
