import React from 'react'
import asyncComponent from 'utils/asyncComponent'

const SynonymsCard = asyncComponent('SynonymsCard')

export default function Synonyms() {
	return (
		<div className="row">
			<SynonymsCard synonyms={['kera', 'pera', 'mera']} />
		</div>
	)
}
