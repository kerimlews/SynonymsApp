import * as React from 'react'
import loadable from '@loadable/component'
import PageLoader from 'components/PageLoader'

export default (pageName: string): any => {
	return loadable(() => import(`pages/${pageName}`), {
		fallback: <PageLoader />,
	})
}
