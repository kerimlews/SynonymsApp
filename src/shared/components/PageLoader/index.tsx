import * as React from 'react'
import Spinner from 'components/Spinner'

export default function PageLoader() {
	return (
		<div className="page-loader">
			<Spinner value="Loading..." />
		</div>
	)
}
