import * as React from 'react'
import asyncPage from 'utils/asyncPage'
import asyncComponent from 'utils/asyncComponent'

// Styles for entire app
import 'scss/styles.scss'

const Home = asyncPage('Home')
const ErrorBoundary = asyncComponent('ErrorBoundary')

export default function App() {
	return (
		<ErrorBoundary>
			<Home />
		</ErrorBoundary>
	)
}
