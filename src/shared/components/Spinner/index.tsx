import * as React from 'react'

interface IProps {
	isLoading: boolean
	value?: string
}
export default function Spinner({ isLoading, value }: IProps) {
	return <div className="spinner">{value ?? 'Loading....'}</div>
}
