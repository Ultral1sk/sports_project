import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoutes = ({

    user,
    component: Comp,
    ...remaining


}) => {
    return <Route {...remaining} component={(props) => (

            remaining.restricted ?
            // if the user restriction is true
                //and the user is authenticated
                // we go to dashboard
                    ( user ?
                        //if the user is authenticated redirect the authenticated user to the dashboard
                        <Redirect to="/dashboard" />
                        :
                        // if the user restricted is false meaning it is not authenticated
                        // we'll render the user this component the sign_in component
                        // here comp is Sign_in component
                        <Comp {...props } user={user}  /> 
                    )
                :
                //if restriction is false we are rendering the sign_in comp
                  // here comp is Sign_in component
            <Comp {...props } user={user} /> 
    )} />
}


export default PublicRoutes
