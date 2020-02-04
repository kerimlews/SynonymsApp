import * as React from 'react'
import { shallow } from 'enzyme'
import Alert from '.'

describe('Alert component', () => {
	const props = {
		value: 'Something went wrong !',
		type: 'danger',
	}
	const component = shallow(<Alert {...props} />)

	test('show type properly', () => {
		const classname = `alert alert-${props.type}`
		expect(component.find('.alert').hasClass(classname)).toBe(true)
	})
	test('show text value', () => {
		expect(component.find('.alert').text()).toBe(props.value)
	})
})
