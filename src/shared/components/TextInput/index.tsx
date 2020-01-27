import * as React from 'react'
import classnames from 'classnames'

interface IProps {
	value?: string
	onChange: any
	icon?: string
	placeholder?: string
	type?: string
	removeMarginBotton?: boolean
}

export default function TextInput({
	type,
	placeholder,
	icon,
	removeMarginBotton,
	onChange,
}: IProps) {
	const inputType = type ?? 'text'
	const onInputChange = (e: any) => onChange(e.target.value)
	const faIcon = icon && (
		<div className="input-group-prepend">
			<i className={icon}></i>
		</div>
	)
	const inputGroupClass = classnames('text-input form-group', {
		'input-group': icon,
		'mb-0': removeMarginBotton,
	})

	return (
		<div className={inputGroupClass}>
			{faIcon}
			<input
				type={inputType}
				onChange={onInputChange}
				className="form-control"
				placeholder={placeholder}
			/>
		</div>
	)
}
