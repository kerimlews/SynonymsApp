import * as React from 'react'
import asyncComponent from 'utils/asyncComponent'
import asyncPage from 'utils/asyncPage'

// Styles for entire app
import 'scss/styles.scss'

const Layout = asyncComponent('Layout')
const Home = asyncPage('Home')

export default function App() {
	return (
		<Layout>
			<Home />
		</Layout>
	)
}
