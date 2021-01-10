import React from 'react'
import Add from './add/theAdd'
import LicenseTopic from './licenseTopic/theLicense'
import ServiceTopic from './serviceTopic/theService'
import Button from './buttonAdd/theButton'
import {
  useParams,
} from "react-router-dom"



export default function Topic(props) {
  const randomClient = props.dates
  const { topicId } = useParams();
  if(topicId === "auth" || topicId === "registrate") {
    return(
      <div></div>
    )
  }
  if(Array.isArray(randomClient[topicId])) {
      if(topicId === "license") {
        return (
          <div>
            <h4>Your {topicId}</h4>
            <LicenseTopic />
            <hr />
            <Button text={topicId}/>
          </div>  
        )
      }
    return (
      <div>
        <h4>Your {topicId}</h4>
        <ServiceTopic />
        <hr />
        <Button text={topicId}/>
      </div> 
    )
    
  }
  if(topicId === "balance") {
    return (
      <div>
          <h3>Your {topicId} is {randomClient[topicId]} $</h3>
        <hr />
          <Add />
        <hr />
      </div> 
    );
  }
  return(
    <div>
          <h3>Your {topicId} is {randomClient[topicId]} $</h3>
        <hr />
    </div>
  )
  
}


