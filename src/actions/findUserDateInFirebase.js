export const FIND_USER_DATES = 'client/FIND_USER_DATES'


export function onFindUserDatesInFireBase(fullOrgDates) {
	return {
		type: 'client/FIND_USER_DATES',
		fullOrgDates,
	}
} 