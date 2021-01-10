import React from 'react'
import { connect } from 'react-redux'
import { onAuthUserClient } from '../actions/authUserClient'
import { onChangeHandler } from '../actions/changeHandlerClient'
import { onGetUid } from '../actions/getOrganizationName'
import { onFindUserDatesInFireBase } from '../actions/findUserDateInFirebase'
import Firebase from 'firebase'


class Auth extends React.Component {
	signInAccount(event) {
	    event.preventDefault()
	    const { email, password } = this.props.change
	    Firebase.auth().signInWithEmailAndPassword(email, password)
	     	.then(response => {
	     		this.props.getUid(response.user.uid)
	     		const uid = response.user.uid 
	     		const base = this.props.base.users
	     		const newBase = base.filter(elem => elem.uid == uid)
	     		const obj = newBase.reduce((obj, cur) => {
	     			return obj = cur
	     		}, {})
	     		this.props.findUserDatesInFireBase(obj)
	     		this.props.authUserClient(true)
	     	})
	     	.catch(err => alert(err.message))
	}

	onChangeHandler(event) {
		const { name, value } = event.target
		this.props.changeHandler(name, value)
	}

	render() {
		return(
			<form style={{width: 400, height: 240,}}>
			  <div className="form-group">
			    <label htmlFor="exampleInputEmail1">Email address</label>
			    <input 
			    	onChange={this.onChangeHandler.bind(this)}
			    	name="email"
			    	value={this.props.value}
			    	type="email" 
			    	className="form-control" 
			    	placeholder="Enter email"
			    />
			  </div>
			  <div className="form-group">
			    <label htmlFor="exampleInputPassword1">Password</label>
			    <input 
			    	onChange={this.onChangeHandler.bind(this)}
			    	name="password"
			    	value={this.props.value}
			    	type="password" 	
			    	className="form-control" 
			    	placeholder="Password"
			    />
			  </div>
			  <button 
			  		onClick={this.signInAccount.bind(this)} 
			  		type="submit" 
			  		className="btn btn-primary">
			  			Sign in
			  </button>
			</form>
		)
	}
}


const mapStateToProps = store => {
  return {
     change: store.change,
     base: store.base
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authUserClient: bool => dispatch(onAuthUserClient(bool)),
    changeHandler: (name, value) => dispatch(onChangeHandler(name, value)),
    getUid: uid => dispatch(onGetUid(uid)),
    findUserDatesInFireBase: fullOrgDates => dispatch(onFindUserDatesInFireBase(fullOrgDates)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)