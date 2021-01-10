import React from "react"
import Auth from './components/authentification'
import { connect } from 'react-redux'
import { onAuthUserClient } from './actions/authUserClient'
import Client from './components/client/theClient'
import Choice from './components/modalWindow'
import Registrate from './components/registrationForm'
import Admin from './components/admin/theAdmin'
import SignUp from './components/admin/signUp/theSignUp'
import Firebase from 'firebase'
import { onDateFromDatabase } from './adminActions/datesFromDataBase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"


class NestingExample extends React.Component {
  
  componentDidMount() {
      const { dateFromDatabase } = this.props
      var ref = Firebase.database().ref();
      ref.on("value", function(snapshot) {
        if(!snapshot.val()) {
          dateFromDatabase(emptyArray)
        }else{
          let dates = Object.values(snapshot.val())
          dateFromDatabase(dates)
        }
      }, function (error) {
          console.log("Error: " + error.code)
      })
    }

  render() {
    const { logged, logChoiced, regOrSigned } = this.props.auth
     const { signed } = this.props.signUp
    return(
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/client">Client</Link>
            </li>
          </ul>
  
          <hr />
  
          <Switch>
            <Route path="/admin"> 
              {signed ? <Admin base={this.props.base.users} /> : <SignUp />}
            </Route>
            <Route path="/client">
              {(logged) ? 
                <Client dates={this.props.dates}/> : 
                (logChoiced) ? <Registrate /> : 
                  (regOrSigned) ? <Auth /> : <Choice authUserClient={this.props.authUserClient}/>}
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}


const mapStateToProps = store => {
  return {
    auth: store.auth,
    dates: store.dates,
    signUp: store.signUp,
    base: store.base
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authUserClient: (bool,logChoice,regOrSign) => dispatch(onAuthUserClient(bool,logChoice,regOrSign)),
    dateFromDatabase: arrayDates => dispatch(onDateFromDatabase(arrayDates)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NestingExample)

const emptyArray = [
  {
    uid: "",
    name: "Nothing here",
    price: 0,
    license: [{text: "Nothing here", cost: 0}],
    balance: 0,
    services: [{text: "Nothing here", cost: 0}]
  }
]