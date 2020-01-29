import * as React from 'react'
import asyncPage from 'utils/asyncPage'
import asyncComponent from 'utils/asyncComponent'

const home = (com: string) => `Home/components/${com}`
const SearchInput = asyncPage(home('SearchInput'))
const AddNewSynonym = asyncPage(home('AddNewSynonym'))
const Synonyms = asyncPage(home('Synonyms'))

const Layout = asyncComponent('Layout')

export default function Home() {
	return (
		<Layout>
			<div className="home">
				<div className="home-synonym-card col-12 col-sm-12 col-md-12 col-xl-6  pt-2">
					<AddNewSynonym />
					<SearchInput />
					<Synonyms />
				</div>
			</div>
		</Layout>
	)
}
