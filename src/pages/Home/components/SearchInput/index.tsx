import * as React from 'react'
import { useEffect, useState } from 'react'
import useDebounce from 'utils/use-debounce'
import asyncComponent from 'utils/asyncComponent'

const TextInput = asyncComponent('TextInput')

export default function SearhInput() {
	const [search, setSearch] = useState('')
	const debouncedSearchTerm = useDebounce(search, 500)
	const onSearchInputChange = (value: string) => setSearch(value)

	useEffect(() => {
		if (debouncedSearchTerm) {
			console.log('fetch Synonyms', search)
		}
	}, [debouncedSearchTerm])

	return (
		<div className="search-input row">
			<div className="col-md-12">
				<TextInput
					placeholder="Search for ..."
					onChange={onSearchInputChange}
				/>
			</div>
		</div>
	)
}
