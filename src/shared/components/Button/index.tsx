import * as React from 'react'
import Spinner from 'components/Spinner'

interface IProps {
	value: string
	onClick: any
	type: string
	icon?: string
	isLoading?: boolean
}

export default function Button({
	value,
	type,
	onClick,
	icon,
	isLoading,
}: IProps) {
	const classname = `btn btn-${type}`
	const faIcon = icon && <i className={icon}></i>

	return (
		<button
			type="button"
			disabled={isLoading}
			className={classname}
			onClick={onClick}
		>
			{isLoading ? <Spinner /> : faIcon}
			{value && <span className="ml-2">{value}</span>}
		</button>
	)
}
