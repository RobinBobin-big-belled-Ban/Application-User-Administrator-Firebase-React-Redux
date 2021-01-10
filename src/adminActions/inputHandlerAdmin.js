export const INPUT_HANDLER = 'admin/INPUT_HANDLER'

export function onInputHandler(name, value) {
	return {
		type: 'admin/INPUT_HANDLER',
		name,
		value
	}
} 