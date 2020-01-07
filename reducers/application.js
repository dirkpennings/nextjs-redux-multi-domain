import { VARIANTS } from '../constants/appConstants'

import { isServer } from '../utils/window'
import { getDomainVariant } from '../utils/helpers'

let variant = ''

function application(state = {}, action) {
	switch (action.type) {
		default: {
			let host = ''

			console.log(global.application)

			if (!isServer) {
				const applicationRoot = document.getElementById('application-root')

				if (typeof applicationRoot !== 'undefined') {
					host = applicationRoot.dataset.host
				}
			} else {
				host = global.application.host
			}

			variant = getDomainVariant(host)

			state = {
				variant: variant || VARIANTS.A,
			}

			return state
		}
	}
}

export default application
