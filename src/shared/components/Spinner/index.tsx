import * as React from 'react'
interface IProps {
	value?: string
}

export default function Spinner({ value }: IProps) {
	return (
		<div className="spinner">
			<i className="fal fa-fan"></i>
			{value && <span>{value}</span>}
		</div>
	)
}
