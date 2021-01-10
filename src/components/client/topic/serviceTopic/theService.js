import React from 'react'
import { connect } from 'react-redux'
import { servicesList } from '../../../../reducers/initialState'
import { onGetServices, onGetPrice, onGetBalance } from '../../../../actions/getOrganizationName'



class ServiceTopic extends React.Component {
  makePriceTopicContent(cost) {
    const price = parseInt(this.props.dates.price) + parseInt(cost) 
    this.props.getPrice(price)
  }

  onClickHandler(event) {
    const obj = [...servicesList].reduce((obj, current) => {
      if(current.text === event.target.innerHTML) {
        obj = {...current}
        return obj
      }
      return obj
    }, {})
    const array = [...this.props.dates.services, obj]

    this.props.getServices(array)
    const cost = obj.cost
    const changePrice = this.makePriceTopicContent.bind(this)
    changePrice(cost)
  }

  render() {
    return(
      <div className="d-flex p-2 justify-content-between">
        <table className="table" style={{width: "60%", borderRight: "solid 2px blue"}}>
          <thead>
            <tr>
              <th className="col">The services list</th>
              <th className="col">Price</th>
            </tr>
          </thead>  
          {servicesList.map((elem, i) => {
            return <tbody key = {i}>
              <tr>
                <td onClick={this.onClickHandler.bind(this)}>{elem.text}</td>
                <td>{elem.cost}</td>
              </tr>
            </tbody>
        })}</table>
        <div>
          <h3>Your services</h3>
          <ol>
            {this.props.dates.services.map((elem, id) => {
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
    getServices: services => dispatch(onGetServices(services)),
    getPrice: price => dispatch(onGetPrice(price)),
    getBalance: balance => dispatch(onGetBalance(balance)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceTopic)	