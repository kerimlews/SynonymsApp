import * as React from 'react'

interface IProps {
	value: string
}

export default function Alert({ value }: IProps) {
	return <div className="alert alert-info">{value}</div>
}
