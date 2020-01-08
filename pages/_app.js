import React from 'react'
import App from 'next/app'

class MyApp extends App {
	static async getInitialProps(appContext) {
		let host = ''

		console.log('initial global.application', global.application)

		if (appContext.ctx.req) {
			// server side

			console.log('===============', appContext.ctx.req.headers.host)

			host = appContext.ctx.req.headers.host
		} else {
			// client side
			host = window.location.host
		}

		// remove port number if present
		host = host.indexOf(':') ? host.split(':')[0] : host

		// set global variable so the application reducer can use this
		// is this a shared variable? does it exceed sessions?
		global.application = {
			host,
		}

		let appProps = await App.getInitialProps({ ...appContext, host })

		return { ...appProps, host }
	}

	render() {
		const { Component, pageProps, host } = this.props

		return (
			<div id="application-root" data-host={host}>
				<Component {...pageProps} />
			</div>
		)
	}
}

export default MyApp
