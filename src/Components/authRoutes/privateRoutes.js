import React from 'react'
import { Route, Redirect } from 'react-router-dom'


// These are the routes when an admin logs in into our application
const PrivateRoutes = ({ 

    user,
    component: Comp,
    ...remaining

    
}) => {
    // a router that is going to accept the remaining props and return 
    //na function which is going to render something
  
    return <Route {...remaining} component={(props) => (
        user ? 
            // here Comp is Dashboard component which we are getting from the parrent component in this case routes component
            // this component will be rendered if the user authentication is success
            <Comp {...props} user={user} />
             :
             // if  the user is not authenticated we are gonna redirect the user to the sign_in route
             <Redirect to="/sign_in"/>
    )}/>

}

export default PrivateRoutes
