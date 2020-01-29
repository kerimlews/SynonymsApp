import * as React from 'react'
import classnames from 'classnames'
import asyncComponent from 'utils/asyncComponent'

const Spinner = asyncComponent('Spinner')

interface IProps {
	value?: string
	onChange: any
	icon?: string
	placeholder?: string
	isLoading?: boolean
	type?: string
	removeMarginBotton?: boolean
}

export default function TextInput({
	type,
	placeholder,
	icon,
	removeMarginBotton,
	isLoading,
	onChange,
}: IProps) {
	const inputType = type ?? 'text'
	const onInputChange = (e: any) => onChange(e.target.value)
	const faIcon = icon && <i className={icon}></i>
	const inputGroupClass = classnames('text-input form-group', {
		'mb-0': removeMarginBotton,
		'is-icon': icon,
	})

	return (
		<div className={inputGroupClass}>
			{isLoading ? <Spinner /> : faIcon}
			<input
				type={inputType}
				onChange={onInputChange}
				className="form-control"
				placeholder={placeholder}
			/>
		</div>
	)
}
