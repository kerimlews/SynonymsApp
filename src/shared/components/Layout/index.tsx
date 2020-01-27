import * as React from 'react'

interface IProps {
	children: React.ReactNode
}
export default function Layout({ children }: IProps) {
	return <div className="layout">{children}</div>
}
