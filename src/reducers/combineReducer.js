import { combineReducers } from 'redux'
import { changeInputReducer, getOrganizationDates, authClientReducer } from './clientReducer'
import { signUpReducer, changeInputAdminReducer, getDatesFromDatabase } from './adminReducer'


export const rootReducer = combineReducers({
	auth: authClientReducer,
	change: changeInputReducer,
	signUp: signUpReducer,
	dates: getOrganizationDates,
	changeAdmin: changeInputAdminReducer,
	base: getDatesFromDatabase
})