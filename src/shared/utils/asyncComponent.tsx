import * as React from 'react'
import loadable from '@loadable/component'
import Spinner from 'components/Spinner'

export default (componentName: string): any => {
	return loadable(() => import(`components/${componentName}`), {
		fallback: <Spinner isLoading value="Something went wrong !" />,
	})
}
