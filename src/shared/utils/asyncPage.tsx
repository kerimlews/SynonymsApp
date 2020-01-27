import * as React from 'react'
import loadable from '@loadable/component'
import Spinner from 'components/Spinner'

export default (pageName: string): any => {
	return loadable(() => import(`pages/${pageName}`), {
		fallback: <Spinner isLoading value="Something went wrong !" />,
	})
}
