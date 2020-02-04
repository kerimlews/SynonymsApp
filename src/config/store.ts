import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import createReducer from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history: any) {
	// Create the store with two middlewares
	// 1. sagaMiddleware: Makes redux-sagas work
	const middlewares = [sagaMiddleware]

	const enhancers = [applyMiddleware(...middlewares)]

	// If Redux DevTools Extension is installed use it, otherwise use Redux compose
	/* eslint-disable no-underscore-dangle */
	const reduxDevTool = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	const composeEnhancers =
		process.env.NODE_ENV !== 'production' &&
		typeof window === 'object' &&
		reduxDevTool
			? reduxDevTool
			: compose
	/* eslint-enable */

	const store: any = createStore(
		createReducer(),
		initialState,
		composeEnhancers(...enhancers)
	)

	// Extensions
	store.sagaMiddleware = sagaMiddleware
	store.runSaga = sagaMiddleware.run
	store.runSaga(sagas)
	store.close = () => store.dispatch(END)

	// Make reducers hot reloadable, see http://mxs.is/googmo
	const hotModule = (module as any).hot
	if (hotModule)
		hotModule.accept('./reducers', () => {
			import('./reducers').then(reducerModule => {
				const createReducers = reducerModule.default
				store.replaceReducer(createReducers())
			})
		})

	return store
}
