export const AUTH_USER = 'client/AUTH_USER'

export function onAuthUserClient(loggIn, logChoice, regOrSign) {
	return {
		type: 'client/AUTH_USER',
		loggIn,
		logChoice,
		regOrSign
	}
} 