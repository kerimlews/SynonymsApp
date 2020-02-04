import * as React from 'react'
import { shallow } from 'enzyme'
import Spinner from '.'

describe('Spinner component', () => {
	const props = {
		value: 'Loading...',
	}
	const component = shallow(<Spinner {...props} />)

	test('show text value', () => {
		expect(component.find('span').text()).toBe(props.value)
	})
})
