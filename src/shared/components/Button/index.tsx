import * as React from 'react'

interface IProps {
	value: string
	onClick: any
	type: string
	icon?: string
}

export default function Button({ value, type, onClick, icon }: IProps) {
	const classname = `btn btn-${type}`

	return (
		<button type="button" className={classname} onClick={onClick}>
			{icon && <i className={icon}></i>}
			{value && <span>{value}</span>}
		</button>
	)
}
