import React from 'react'
import AdminDate from './adminDate/theAdminDate'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom"

export default function Admin(props) {
  let { path, url } = useRouteMatch()
  let list = props.base
  let sum = list.reduce((sum,cur) => sum + cur.price, 0)
  return (
    <div>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Client Name</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
        {list.map((item, index) => {
        return <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td><Link to={`${url}/${item.name}`}>{item.name}</Link></td>
          <td>{item.price}</td>
        </tr>
          })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="col">Total</th>
              <th scope="col"></th>
              <th scope="col">{sum}</th>
            </tr>
          </tfoot>
        </table>
        

      <Switch>
        <Route exact path={path}>
          <h3>Please select a client.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <AdminDate baseFromAdmin={props.base} />
        </Route>
      </Switch>
    </div>
  );
}

