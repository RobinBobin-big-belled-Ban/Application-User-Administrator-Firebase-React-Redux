import React from 'react'
import Firebase from 'firebase'
import { connect } from 'react-redux'
import { onAuthUserClient } from '../actions/authUserClient'
import { onChangeHandler } from '../actions/changeHandlerClient'
import { onGetName, onGetUid } from '../actions/getOrganizationName'



class Registrate extends React.Component {

	createAccount(event) {
    	event.preventDefault()
    	const { company, email, password } = this.props.change
    	Firebase.auth().createUserWithEmailAndPassword(email, password)
    		.then(response => {
    			alert("РЕГИСТРАЦИЯ ЗАВЕРШЕНА")
    			this.props.getetUid(response.user.uid)
    			this.props.getName(company)
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
				    <label htmlFor="exampleInputEmail1">Name of your organization</label>
				    <input 
				    	onChange={this.onChangeHandler.bind(this)}
				    	name="company"
				    	value={this.props.value}
				    	type="text" 
				    	className="form-control" 
				    	placeholder="Enter name"
				    />
			  	</div>
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
			  		onClick={this.createAccount.bind(this)} 
			  		style={{marginLeft: 20}} 
			  		type="submit" 
			  		className="btn btn-primary">
			  			Registrate
			  	</button>
			</form>
		)
	}
}


const mapStateToProps = store => {
  return {
     change: store.change,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authUserClient: bool => dispatch(onAuthUserClient(bool)),
    changeHandler: (name, value) => dispatch(onChangeHandler(name, value)),
    getName: name => dispatch(onGetName(name)),
    getetUid: uid => dispatch(onGetUid(uid))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Registrate)


