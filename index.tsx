import 'babel-polyfill'

import * as React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './src/config/store'

import App from './src/App'

// configure store
const initialState = {}
const history = {}
const store = configureStore(initialState, history)

const render = () =>
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	)

render()

// HMR
const hotModule = (module as any).hot
if (hotModule) {
	hotModule.accept('./src/App', render())
}
