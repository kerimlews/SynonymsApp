import * as React from 'react'
import { shallow } from 'enzyme'
import Button from '.'

describe('Button component', () => {
	const props = {
		value: 'submit',
		onClick: jest.fn(),
		type: 'primary',
		icon: 'fa fa-send',
		isLoading: false,
	}

	const component = shallow(<Button {...props} />)

	test('show icon', () => {
		expect(component.find('i').hasClass(props.icon)).toBe(true)
	})
	test('render text value', () => {
		expect(component.find('button').text()).toBe(props.value)
	})
	test('show Spinner on loading', () => {
		component.setProps({ isLoading: true })
		expect(component.find('Spinner')).toHaveLength(1)
	})
})
