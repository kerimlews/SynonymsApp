import { fork, all } from 'redux-saga/effects'

// ======================================================================================
// All application reducers should be imported here
// ======================================================================================

import home from 'pages/Home/sagas'

// ======================================================================================
// Global application state
// ======================================================================================

export default function* rootSaga() {
	yield all([fork(home)])
}
