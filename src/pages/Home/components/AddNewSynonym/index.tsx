import * as React from 'react'
import { useState } from 'react'
import asyncComponent from 'utils/asyncComponent'

const TextInput = asyncComponent('TextInput')
const Button = asyncComponent('Button')

export default function AddNewSynonym() {
	const word = textInput('')
	const synonym = textInput('')
	const submit = () => console.log('Add new', word.value, synonym.value)

	return (
		<div className="row">
			<div className="form-inline">
				<TextInput onChange={word.onChange} placeholder="word" />
				<TextInput onChange={synonym.onChange} placeholder="synonym" />
				<Button type="primary" value="Add new" onClick={submit} />
			</div>
		</div>
	)
}

function textInput(initialValue: string) {
	const [value, setValue] = useState(initialValue)
	const onChange = (value: string) => setValue(value)

	return {
		value,
		onChange,
	}
}
