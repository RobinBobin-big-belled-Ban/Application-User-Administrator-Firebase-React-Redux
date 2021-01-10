export const CHANGE_HANDLER = 'client/CHANGE_HANDLER'


export function onChangeHandler(name, value) {
	return {
		type: 'client/CHANGE_HANDLER',
		name,
		value
	}
} 



