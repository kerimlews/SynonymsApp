import * as React from 'react'
import { isString } from 'lodash'

interface IProps {
	value: string | any
	type: string
}

export default function Alert({ type, value }: IProps) {
	const classname = `alert alert-${type}`
	const message = isString(value) ? value : value && value.message
	return value ? <div className={classname}>{message}</div> : null
}
