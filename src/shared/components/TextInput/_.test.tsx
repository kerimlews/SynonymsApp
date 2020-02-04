import * as React from 'react'
import { shallow } from 'enzyme'

import TextInput from './'

describe('TextInput component', () => {
	const props = {
		type: 'text',
		placeholder: 'Search',
		icon: 'fa fa-search',
		removeMarginBotton: false,
		isLoading: false,
		onChange: jest.fn(),
	}

	const component = shallow(<TextInput {...props} />)

	test('show icon', async () => {
		expect(component.find('i').hasClass(props.icon)).toBe(true)
		expect(component.find('.text-input').hasClass('is-icon')).toBe(true)
	})
	test('remove margin bottom', () => {
		component.setProps({ removeMarginBotton: true })
		expect(component.find('.text-input').hasClass('mb-0')).toBe(true)
	})
	test('show Spinner on loading', () => {
		component.setProps({ isLoading: true })
		expect(component.find('Spinner')).toHaveLength(1)
	})
})
