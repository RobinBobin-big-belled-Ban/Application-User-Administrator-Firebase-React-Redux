export const DATES_FROM_DATABASE = 'admin/DATES_FROM_DATABASE'

export const onDateFromDatabase = (arrayDates) => {
	return {
		type: 'admin/DATES_FROM_DATABASE',
		arrayDates,
	}
}