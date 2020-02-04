import * as React from 'react'
import { shallow } from 'enzyme'
import SynonymsCard from '.'

describe('SynonymsCard component', () => {
	const props = {
		synonyms: ['A', 'B', 'C'],
	}
	const component = shallow(<SynonymsCard {...props} />)

	test('render items properly', () => {
		expect(component.find('.badge')).toHaveLength(3)
	})
})
