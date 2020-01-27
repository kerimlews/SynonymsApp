import * as React from 'react'

interface IProps {
	value: string
	onClick: any
	type: string
}

export default function Button({ value, type, onClick }: IProps) {
	const classname = `"btn btn-${type}"`

	return (
		<button type="button" className={classname} onClick={onClick}>
			{value}
		</button>
	)
}
