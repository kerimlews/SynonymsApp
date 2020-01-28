import * as React from 'react'

import Alert from 'components/Alert'

export default class ErrorBoundary extends React.Component<any> {
	state = { hasError: false }

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: any, errorInfo: any): any {
		// You can also log the error to an error reporting service
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <Alert type="danger" value="Something went wrong." />
		}

		return this.props.children
	}
}
