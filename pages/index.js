import React from 'react'
import { withRedux } from '../lib/redux'

class Index extends React.Component {
	render() {
		const { variant } = this.props
		return <div>Variant: {variant}</div>
	}
}

Index.getInitialProps = ({ reduxStore, query, res }) => {
	const state = reduxStore.getState()

	return {
		variant: state.application.variant,
	}
}

export default withRedux(Index)
