import { VARIANTS } from '../constants/appConstants'

export const getDomainVariant = host => {
	switch (host) {
		case 'variant-b.local': {
			return VARIANTS.B
		}
		default: {
			return VARIANTS.A
		}
	}
}
