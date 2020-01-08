import React from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {
	render() {
		const { variant } = this.props
		return <div>Variant: {variant}</div>
	}
}

export default connect(state => ({
	variant: state.application.variant,
}))(Index)
