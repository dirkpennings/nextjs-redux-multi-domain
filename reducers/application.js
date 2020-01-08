import { VARIANTS, HOST } from '../constants/appConstants'

import { getDomainVariant } from '../utils/helpers'

function application(state = {}, action) {
	switch (action.type) {
		case HOST.SET:
			const host = action.payload.indexOf(':') ? action.payload.split(':')[0] : action.payload
			return {
				...state,
				host,
				variant: getDomainVariant(host),
			}
		default: {
			return state
		}
	}
}

export default application
