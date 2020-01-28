import React from 'react'
import asyncComponent from 'utils/asyncComponent'

const SynonymsCard = asyncComponent('SynonymsCard')

export default function Synonyms() {
	return (
		<div className="synonyms row">
			<div className="col-md-12">
				<SynonymsCard synonyms={['kera', 'pera', 'mera']} />
			</div>
		</div>
	)
}
