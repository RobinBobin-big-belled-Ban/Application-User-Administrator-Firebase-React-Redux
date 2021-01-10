export const SIGNIN_USER = 'admin/SIGNIN_USER'

export function onSignInAdmin(signIn) {
	return {
		type: 'admin/SIGNIN_USER',
		signIn,
	}
} 