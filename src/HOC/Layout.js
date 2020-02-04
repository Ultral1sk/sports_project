import React from 'react'
import Header from '../Components/Header_Footer/Header'
import Footer from '../Components/Header_Footer/Footer'
import Featured from '../Components/Home/featured/index'
// this is a react stateless component just for render purpouses
const Layout = (props) => {
    return (
        <div>
            {props.children}
            <Header />
  
            <Footer />
        </div>
    )
}

export default Layout
