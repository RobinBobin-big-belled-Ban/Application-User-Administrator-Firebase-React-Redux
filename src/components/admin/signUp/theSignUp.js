import React from 'react'
import { connect } from 'react-redux'
import Firebase from 'firebase'
import { onSignInAdmin } from '../../../adminActions/signInAdmin'
import { onInputHandler } from '../../../adminActions/inputHandlerAdmin'
import { adminPassword as a } from '../../../reducers/initialState'


class SignUp extends React.Component {

	signInAccount(event) {
	    event.preventDefault()
	    const { email, password } = this.props.changeAdmin
	    if (a.password == password && a.email == email) {
	    	Firebase.auth().signInWithEmailAndPassword(email, password)
	     	.then(response => {
	     		console.log(response.user.uid)
	     		this.props.signInAdmin(true)
	     	})
	     	.catch(err => alert(err.message))
	    }else{
	    	alert("Wrong the admin pass or email")
	    }
	    
	}

	onChangeHandler(event) {
		const { name, value } = event.target
		this.props.inputHandler(name, value)
	}

	render() {
		return(
			<form style={{width: 400, height: 240,}}>
			  <div className="form-group">
			    <label htmlFor="exampleInputEmail1">Email address</label>
			    <input 
			    	onChange={this.onChangeHandler.bind(this)}
			    	name="email"
			    	
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
			    	type="password" 	
			    	className="form-control" 
			    	placeholder="Password"
			    />
			  </div>
			  <button 
			  		onClick={this.signInAccount.bind(this)} 
			  		type="submit" 
			  		className="btn btn-primary">
			  			Sign Up
			  </button>
			</form>
		)
	}
}


const mapStateToProps = store => {
  return {
     signUp: store.signUp,
     changeAdmin: store.changeAdmin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signInAdmin: signIn => dispatch(onSignInAdmin(signIn)),
    inputHandler: (name, value) => dispatch(onInputHandler(name, value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)