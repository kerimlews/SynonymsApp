import * as React from 'react'

interface IProps {
	value: string
	type: string
}

export default function Alert({ type, value }: IProps) {
	const classname = `alert alert-${type}`

	return <div className={classname}>{value}</div>
}
