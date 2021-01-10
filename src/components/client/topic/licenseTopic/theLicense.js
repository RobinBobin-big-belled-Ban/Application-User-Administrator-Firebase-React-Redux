import React from 'react'
import { connect } from 'react-redux'
import { licensesList } from '../../../../reducers/initialState'
import { onGetLicense, onGetPrice, onGetBalance } from '../../../../actions/getOrganizationName'



class LicenseTopic extends React.Component {
  constructor() {
  	super()
  	this.makePriceTopicContent = this.makePriceTopicContent.bind(this)
  }

  makePriceTopicContent(cost) {
  	const totalPrice = parseInt(this.props.dates.price) + parseInt(cost) 
  	this.props.getPrice(totalPrice)
  }

  onClickHandler(event) {
    const obj = [...licensesList].reduce((obj, current) => {
      if(current.text === event.target.innerHTML) {
        obj = {...current}
        return obj
      }
      return obj
    }, {})
    const array = [...this.props.dates.license, obj]

    this.props.getLicense(array)
    const cost = obj.cost
    this.makePriceTopicContent(cost)
  };

  render() {
    return(
      <div className="d-flex p-2 justify-content-between">
        <table className="table" style={{width: "60%", borderRight: "solid 2px blue"}}>
          <thead>
            <tr>
              <th className="col">The license list</th>
              <th className="col">Price</th>
            </tr>
          </thead>  
          {licensesList.map((elem, i) => {
            return <tbody key = {i}>
              <tr>
                <td onClick={this.onClickHandler.bind(this)}>{elem.text}</td>
                <td>{elem.cost}</td>
              </tr>
            </tbody>
        })}</table>
        <div>
          <h3>Your licenses</h3>
          <ol>
            {this.props.dates.license.map((elem, id) => {
              return <li key={id}>{elem.text}</li>
            })}
          </ol>
        </div>
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
    getLicense: license => dispatch(onGetLicense(license)),
    getPrice: price => dispatch(onGetPrice(price)),
    getBalance: balance => dispatch(onGetBalance(balance)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LicenseTopic)	