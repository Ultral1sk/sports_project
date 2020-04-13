import React from 'react'
import Layout from './HOC/Layout'
import { Switch } from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes'
import PublicRoute from './Components/authRoutes/publicRoutes'

import Home from './Components/Home/index'
import SignIn from './Components/signIn/'
import NotFound from './Components/notFoundPage/notFound'

import Dashboard from './Components/admin/Dashboard'
import AdminMatches from './Components/admin/matches'
import AddEditMatch from './Components/admin/matches/addEditMatch'
import AddMatch from './Components/admin/matches/addEditMatch'
import AdminPlayers from './Components/admin/players/index'
import AddEditPlayers from './Components/admin/players/addEditPlayers'
import ThePlayers from './Components/thePlayers/index'
import TheMatches from './Components/theMatches/'
import NewsMain from '../src/Components/Home/teamNewsHome/teamNewsMain/index'
import VideosCarrier from './Components/VideosComponent/'
import Fans from './Components/fans/index'
import Navbar from './Components/Header_Footer/Navbar'
import Footer from './Components/Header_Footer/Footer'

// this is in this case the App component
const Routes = (props) => {
    return (
        <div>
            <Navbar />
            <Layout>
                <Switch>
                    <PrivateRoute {...props} path="/admin_players/add_players/" exact component={AddEditPlayers} />
                    <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers} />
                    <PrivateRoute {...props} path="/admin_players/" exact component={AdminPlayers} />
                    <PrivateRoute {...props} path="/admin_matches/edit_match/" exact component={AddMatch} />
                    <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
                    <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches} />
                    <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />
                    <PublicRoute  {...props} restricted={true} path='/sign_in' exact component={SignIn} />
                    {/*  if the user is signed in they will not be able to acces the sign_in component they will be redirected directly to the dashboard    */}
                    <PublicRoute  {...props} path='/team_fans' exact component={Fans} />

                    <PublicRoute  {...props} restricted={false} path='/the_videos' exact component={VideosCarrier} />
                    <PublicRoute  {...props} restricted={false} path='/team_players' exact component={ThePlayers} />
                    <PublicRoute  {...props} restricted={false} path='/the_matches' exact component={TheMatches} />
                    <PublicRoute  {...props} restricted={false} path='/team_news' exact component={NewsMain} />
                    {/* if the boolena is false the home route can be accessed by anyone */}
                    <PublicRoute  {...props} restricted={false} path='/' exact component={Home} />
                    <PublicRoute  {...props} restricted={false} component={NotFound} />
                </Switch>
            </Layout>
            <Footer />
        </div>
    )
}

export default Routes;
