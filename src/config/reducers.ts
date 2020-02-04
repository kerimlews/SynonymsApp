// ======================================================================================
// Combine all reducers in this file and export the combined reducers.
// If we were to do this in store.js, reducers wouldn't be hot reloadable.
// ======================================================================================

import { combineReducers } from 'redux'

// ======================================================================================
// All application reducers should be imported here
// ======================================================================================

import homeReducer from 'pages/Home/reducer'

// ======================================================================================
// Global application state
// ======================================================================================

export default function createReducer() {
	return combineReducers({
		home: homeReducer,
	})
}
