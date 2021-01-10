import React from 'react'
import Table from './table/theTable'
import {
  useParams,
} from "react-router-dom"

export default function AdminDate(props) {
  let { topicId } = useParams()
  let list = props.baseFromAdmin
  let topicName = list.filter(item => (item.name === topicId) ? item : null)
  return(
    <div>
      <h2>{topicId}</h2>
      <div className="d-flex p-2 justify-content-between">
        <Table 
          head="Licenses" 
          colLicense="Licenses" 
          dates={topicName[0].license} 
        />
        <Table 
          head="Services" 
          colLicense="Services" 
          dates={topicName[0].services} 
        />
      </div>
    </div>
    
  )
}



