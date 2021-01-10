import React from 'react'
import Topic from './topic/theTopic'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom"



export default function Client(props) {
  
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/services`}>Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/license`}>Licenses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/price`}>Price</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/balance`}>Balance</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic dates={props.dates}/>
        </Route>
      </Switch>
    </div>
  );
}