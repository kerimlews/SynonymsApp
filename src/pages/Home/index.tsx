import * as React from 'react'
import asyncPage from 'utils/asyncPage'

const home = (com: string) => `Home/components/${com}`
const SearchInput = asyncPage(home('SearchInput'))
const AddNewSynonym = asyncPage(home('AddNewSynonym'))
const Synonyms = asyncPage(home('Synonyms'))

export default function Home() {
	return (
		<div className="home">
			<AddNewSynonym />
			<SearchInput />
			<Synonyms />
		</div>
	)
}
