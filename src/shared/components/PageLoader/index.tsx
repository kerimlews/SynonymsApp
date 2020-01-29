import * as React from 'react'
import asyncComponent from 'utils/asyncComponent'

const Spinner = asyncComponent('Spinner')

export default function PageLoader() {
	return (
		<div className="page-loader">
			<Spinner value="Loading..." />
		</div>
	)
}
