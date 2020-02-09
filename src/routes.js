import React from 'react'
import Layout from './HOC/Layout'
import { Switch , Route } from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes'
import PublicRoute from './Components/authRoutes/publicRoutes'

import Home from './Components/Home/index'
import SignIn from './Components/signIn/'
import Dashboard from './Components/admin/Dashboard'
// this is in this case the App component
const Routes = (props) => {
    return (
        <div>
            <Layout>
                <Switch>
                    <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />
                    <PublicRoute  {...props} restricted={true} path='/sign_in' exact component={SignIn} />
                    {/*  if the user is signed in they will not be able to acces the sign_in component they will be redirected directly to the dashboard    */}
                    <PublicRoute  {...props} restricted={false} path='/' exact component={Home} />
                    {/* if the boolena is false the home route can be accessed by anyone */}
                   
                </Switch>
            </Layout>
        </div>
    )
}

export default Routes;
