import React from 'react'
import Layout from './HOC/Layout'
import { Switch , Route } from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes'

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
                    <Route exact component={SignIn} path="/sign_in" />
                    <Route exact component={Home} path="/" />
                </Switch>
            </Layout>
        </div>
    )
}

export default Routes;
