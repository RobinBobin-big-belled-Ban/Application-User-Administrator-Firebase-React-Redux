import { AUTH_USER } from '../actions/authUserClient'
import { CLEAR_STATE_AUTH } from '../actions/clearStateAfteAuth'
import { CHANGE_HANDLER } from '../actions/changeHandlerClient'
import { FIND_USER_DATES } from '../actions/findUserDateInFirebase'
import { GET_UID, GET_NAME, GET_PRICE, GET_LICENSE, GET_BALANCE, GET_SERVICES } from '../actions/getOrganizationName'



const initialStateAuth = {
	logged: false,
	logChoiced: false,
	regOrSigned: false
}

export function authClientReducer(state = initialStateAuth, action) {
	switch(action.type) {
		case AUTH_USER: 
			return {...state, 
					logged: action.loggIn,
					logChoiced: action.logChoice,
					regOrSigned: action.regOrSign
				}
		default:
			return state
	}
}

 
const initialStateCreateAccount = {
	email: '',
	password: '',
	money: '',
	company: ''
}

export function changeInputReducer(state = initialStateCreateAccount, action) {
	switch(action.type) {
		case CHANGE_HANDLER: 
			return {...state, [action.name]: action.value}
		case CLEAR_STATE_AUTH:
			return {...state, email: '', password: ''}
		default:
			return state
	}
}


const initialStateGetOrg = {
	uid: "",
	name: "",
	price: 0,
	license: [],
	balance: 0,
	services: []
}

export function getOrganizationDates(state = initialStateGetOrg, action) {
	switch(action.type) {
		case GET_UID: 
			return {...state, uid: action.uid }
		case GET_NAME: 
			return {...state, name: action.name }
		case GET_PRICE: 
			return {...state, price: action.price }
		case GET_LICENSE: 
			return {...state, license: action.license }
		case GET_BALANCE: 
			return {...state, balance: action.balance }
		case GET_SERVICES: 
			return {...state, services: action.services }
		case FIND_USER_DATES:
			return {...state, ...action.fullOrgDates}
		default:
			return state
	}
}
