import React from 'react'
import App from 'next/app'
import { withRedux } from '../lib/redux'
import { HOST } from '../constants/appConstants'

class MyApp extends App {
	static async getInitialProps(appContext) {
		if (appContext.ctx.req) {
			appContext.reduxStore.dispatch({ type: HOST.SET, payload: appContext.ctx.req.headers.host })
		}

		let appProps = await App.getInitialProps({ ...appContext })

		return { ...appProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<div id="application-root">
				<Component {...pageProps} />
			</div>
		)
	}
}

export default withRedux(MyApp)
