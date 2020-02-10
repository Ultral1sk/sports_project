import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css'



import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import { firebase } from './firebase'



//creating a function which is goingto manage the routes
// getting the props from firebase
const App = (props) => {
    console.log(props);
    
    return(
        <BrowserRouter>
        {/* passing the userprops which we are getting  from firebase through APP component
        ingo the ROUTES so we can manipulate them over there meaning we can chech if we have a user
        or we dont.
         */}
            <Routes {...props}/>
        </BrowserRouter>
    )
}
//we are passing the user we are gonna get from firebase to the app
firebase.auth().onAuthStateChanged((user) => {
    // console.log(user);
    // passing the user here
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

