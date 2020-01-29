import * as React from 'react'
import { shallow } from 'enzyme'
import Alert from '.'

describe('Alert component', () => {
	test('Alert test', () => {
		const props = {
			value: 'Something went wrong !',
			type: 'danger',
		}
		const Alert = shallow(<div>asasasda</div>)
		console.log(Alert)
		expect(true)
	})
})
