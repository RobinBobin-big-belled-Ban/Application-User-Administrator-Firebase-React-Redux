import React from 'react'
import { connect } from 'react-redux'
import { onGetBalance } from '../../../../actions/getOrganizationName'
import { onChangeHandler } from '../../../../actions/changeHandlerClient'


class Add extends React.Component {

	handler(event) {
		const { name, value } = event.target
		this.props.changeHandler(name, value)
	}	

	setDataBase(event) {
		const { money } = this.props.change
		const { balance, price } = this.props.dates
		const curBalance = parseInt(money) + parseInt(balance) - price
		this.props.getBalance(curBalance)
		this.props.changeHandler("money", "")
	}

	render() {
		return(
			<div>
				<div className="form-group">
				    <label htmlFor="exampleInputPassword1">How much money do you want to Add?</label>
				    <input
				    	onChange={this.handler.bind(this)}
				    	name='money'
				    	value={this.props.change.money}
				    	type="number" 	
				    	className="form-control" 
				    	placeholder="enter the amount"
				    />
				  	</div>
				  	<button 
				  		onClick={this.setDataBase.bind(this)}
				  		className="btn btn-primary">
				  			top up your balance
				  	</button>
			</div>
		)
	}
} 


const mapStateToProps = store => {
  return {
    dates: store.dates,
    change: store.change
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBalance: balance => dispatch(onGetBalance(balance)),
    changeHandler: (name, value) => dispatch(onChangeHandler(name, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)