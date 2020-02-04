import React from 'react'
import { connect } from 'react-redux'
import { selectHomeSynonyms } from '../../reselect'
import SynonymsCard from 'components/SynonymsCard'

interface IProps {
	synonyms: string[]
}
function Synonyms({ synonyms }: IProps) {
	return (
		<div className="synonyms row">
			<div className="col-md-12">
				<SynonymsCard synonyms={synonyms} />
			</div>
		</div>
	)
}

export default connect(selectHomeSynonyms())(Synonyms)
