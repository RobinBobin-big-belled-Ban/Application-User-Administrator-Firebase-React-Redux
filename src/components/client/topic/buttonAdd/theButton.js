import React from 'react'
import { connect } from 'react-redux'
import Firebase from 'firebase'


class Button extends React.Component {
	setDateToBase(event) {
		const { uid, name, price, license, balance, services } = this.props.dates
		console.log(this.props.dates)

		const customerRef = Firebase.database().ref(`${uid}/`);
		customerRef.set ({
		  uid: uid,
	      name: name,
	      price: price,
	      license: license,
	      balance: balance,
	      services: services
		});
	}
	render() {
		return(
			<button onClick={this.setDateToBase.bind(this)} className="btn btn-primary">
				add {this.props.text}
			</button>
		)
	}
}

const mapStateToProps = store => {
  return {
    dates: store.dates,
  }
}

export default connect(mapStateToProps)(Button)	