import * as React from 'react'

interface IProps {
	children: React.ReactNode
}

export default function Layout({ children }: IProps) {
	return (
		<div className="layout">
			<div className="nav">
				<div className="logo">
					<h3>SynonymApp</h3>
					<span>Powered by Keirm Alihodza</span>
				</div>
			</div>
			{children}
		</div>
	)
}
