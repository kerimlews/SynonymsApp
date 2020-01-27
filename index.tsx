import * as React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { loadableReady } from '@loadable/component'
import loadable from '@loadable/component'

// dynamic imported components
const App = loadable(() => import('./src/App'))

const render = () =>
	ReactDOM.render(
		<AppContainer>
			<App />
		</AppContainer>,
		document.getElementById('root')
	)

loadableReady(() => render())

// HMR
const hotModule = (module as any).hot
if (hotModule) {
	hotModule.accept('./src/App', render())
}
