import * as React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import useDebounce from 'utils/hooks/use-debounce'
import { searchSynonyms } from 'pages/Home/actions/SearchSynonyms'
import { selectHomeIsLoadingSearch } from 'pages/Home/reselect'
import input from 'utils/hooks/input'
import TextInput from 'components/TextInput'

interface IProps {
	isLoading: boolean
	searchSynonyms: any
}

function SearhInput({ isLoading, searchSynonyms }: IProps) {
	const search = input('')
	const debouncedSearchTerm = useDebounce(search, 500)
	const onSearchInputChange = (value: string) => search.onChange(value)

	useEffect(() => {
		if (debouncedSearchTerm.value.length > 0) {
			searchSynonyms(search.value)
		}
	}, [debouncedSearchTerm.value])

	return (
		<div className="search-input row">
			<div className="col-md-12">
				<TextInput
					isLoading={isLoading}
					icon="fad fa-search"
					placeholder="Search for ..."
					onChange={onSearchInputChange}
				/>
			</div>
		</div>
	)
}

const mapDispatchToActions = (dispatch: any) => ({
	searchSynonyms: (word: string) => dispatch(searchSynonyms(word)),
})

export default connect(
	selectHomeIsLoadingSearch(),
	mapDispatchToActions
)(SearhInput)
