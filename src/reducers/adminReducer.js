import { SIGNIN_USER } from '../adminActions/signInAdmin'
import { INPUT_HANDLER } from '../adminActions/inputHandlerAdmin' 
import { DATES_FROM_DATABASE } from '../adminActions/datesFromDataBase'

const initialStateSignIn = {
	signed: false,
}

export function signUpReducer(state = initialStateSignIn, action) {
	switch(action.type) {
		case SIGNIN_USER: 
			return {...state, signed: action.signIn }
		default:
			return state
	}
}


const initialStateLogging = {
	email: '',
	password: '',
}

export function changeInputAdminReducer(state = initialStateLogging, action) {
	switch(action.type) {
		case INPUT_HANDLER: 
			return {...state, [action.name]: action.value}
		default:
			return state
	}
}


const initialStateDatesFromBase = {
	users: [],
}

export function getDatesFromDatabase(state = initialStateDatesFromBase, action) {
	switch(action.type) {
		case DATES_FROM_DATABASE: 
			return {...state, users: action.arrayDates}
		default:
			return state
	}
}