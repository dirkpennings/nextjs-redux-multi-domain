import React from 'react'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { initializeStore } from '../store'
import { HOST } from '../constants/appConstants'

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		if (ctx.req) {
			ctx.store.dispatch({ type: HOST.SET, payload: ctx.req.headers.host })
		}

		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

		return { pageProps }
	}

	render() {
		const { Component, pageProps, store } = this.props

		return (
			<Provider store={store}>
				<div id="application-root">
					<Component {...pageProps} />
				</div>
			</Provider>
		)
	}
}

export default withRedux(initializeStore, { debug: true })(MyApp)
