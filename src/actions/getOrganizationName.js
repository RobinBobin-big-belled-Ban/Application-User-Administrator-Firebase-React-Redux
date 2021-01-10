export const GET_UID = 'client/GET_UID'
export const GET_NAME = 'client/GET_NAME'
export const GET_PRICE = 'client/GET_PRICE'
export const GET_LICENSE = 'client/GET_LICENSE'
export const GET_BALANCE = 'client/GET_BALANCE'
export const GET_SERVICES = 'client/GET_SERVICES'

export function onGetUid(uid) {
	return {
		type: 'client/GET_UID',
		uid,
	}
} 
//getOrganizationName
export function onGetName(name) {
	return {
		type: 'client/GET_NAME',
		name,
	}
} 

export function onGetPrice(price) {
	return {
		type: 'client/GET_PRICE',
		price,
	}
} 

export function onGetLicense(license) {
	return {
		type: 'client/GET_LICENSE',
		license,
	}
} 

export function onGetBalance(balance) {
	return {
		type: 'client/GET_BALANCE',
		balance,
	}
} 

export function onGetServices(services) {
	return {
		type: 'client/GET_SERVICES',
		services
	}
} 
