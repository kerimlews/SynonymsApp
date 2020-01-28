import * as React from 'react'

interface IProps {
	synonyms: string[]
}

export default function SynonymsCard({ synonyms }: IProps) {
	return (
		<div className="synonyms-card card">
			<div className="card-body">
				{synonyms.map((synonym: string) => (
					<span key={synonym} className="badge badge-dark m-1">
						{synonym}
					</span>
				))}
			</div>
		</div>
	)
}
