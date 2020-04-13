import React from 'react'
import Header from '../Components/Header_Footer/Header'
import Footer from '../Components/Header_Footer/Footer'
import Navbar from '../Components/Header_Footer/Navbar'
// this is a react stateless component just for render purpouses
const Layout = (props) => {
    return (
        <div>
            {props.children}
           
        
            
        </div>
    )
}

export default Layout
