import * as React from 'react'
import { connect } from 'react-redux'
import { selectHomeError } from './reselect'
import Layout from 'components/Layout'
import Alert from 'components/Alert'
import AddNewSynonym from './components/AddNewSynonym'
import Synonyms from './components/Synonyms'
import SearchInput from './components/SearchInput'

interface IProps {
	error?: any
}

function Home({ error }: IProps) {
	return (
		<Layout>
			<div className="home">
				<div className="home-synonym-card col-12 col-sm-12 col-md-12 col-xl-6 pt-2">
					<Alert type="danger" value={error} />
					<div>
						<AddNewSynonym />
						<SearchInput />
						<Synonyms />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default connect(selectHomeError())(Home)
