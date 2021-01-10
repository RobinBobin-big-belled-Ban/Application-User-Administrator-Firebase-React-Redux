import React from 'react'


export default function Table(props) {
  let dates = props.dates
  return(
    <div>
      <h3>{props.head}</h3>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{props.colLicense}</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
            {dates.map((item, index) => {
              return <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.text}</td>
                <td>{item.cost}</td>
              </tr>
            })}
        </tbody>
      </table>
    </div>
    
  )
}