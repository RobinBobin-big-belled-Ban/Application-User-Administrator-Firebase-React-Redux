import React from "react"
import {
  Link,
  useRouteMatch
} from "react-router-dom"


export default function Choice(props) {
	let { url } = useRouteMatch();
	return(
		<div>
			<h3>Register or log into customer account</h3>
			<button
				onClick={() => props.authUserClient(false, false, true)} 
		  		type="submit" 
		  		className="btn btn-success">
		  			<Link to={`${url}/auth`}>Sign in</Link>
		  	</button>
		  	<button
		  		onClick={() => props.authUserClient(false, true, false)}  
		  		style={{marginLeft: 20}} 
		  		type="submit" 
		  		className="btn btn-success">
		  			<Link to={`${url}/registrate`}>Registrate</Link>
			 </button>
		</div>
	)
}