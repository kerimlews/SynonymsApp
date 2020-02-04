import * as React from 'react'

// Styles for entire app
import 'scss/styles.scss'

import ErrorBoundary from 'components/ErrorBoundary'
import Home from 'pages/Home'

export default function App() {
	return (
		<ErrorBoundary>
			<Home />
		</ErrorBoundary>
	)
}
