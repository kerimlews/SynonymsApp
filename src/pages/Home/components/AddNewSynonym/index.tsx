import * as React from 'react'
import { isEmpty } from 'utils/helpers'
import { connect } from 'react-redux'
import { addNewSynonym } from 'pages/Home/actions/AddNewSynonym'
import input from 'utils/hooks/input'
import { selectHomeIsLoadingAdd } from 'pages/Home/reselect'
import TextInput from 'components/TextInput'
import Button from 'components/Button'

interface IProps {
	addNew: any
	isLoading: boolean
}

function AddNewSynonym({ addNew, isLoading }: IProps) {
	const word = input('')
	const synonym = input('')
	const isValidForm = !isEmpty(word.value) && !isEmpty(synonym.value)
	const submit = () => isValidForm && addNew(word.value, synonym.value)

	return (
		<div className="add-new-synonym mb-2 row">
			<div className="form-inline col-md-12">
				<TextInput onChange={word.onChange} placeholder="word" />
				<TextInput onChange={synonym.onChange} placeholder="synonym" />
				<Button
					isLoading={isLoading}
					type="primary"
					value="Add new"
					icon="fal fa-paper-plane"
					onClick={submit}
				/>
			</div>
		</div>
	)
}

const mapDispatchToActions = (dispatch: any) => ({
	addNew: (word: string, synonym: string) =>
		dispatch(addNewSynonym(word, synonym)),
})

export default connect(
	selectHomeIsLoadingAdd(),
	mapDispatchToActions
)(AddNewSynonym)
