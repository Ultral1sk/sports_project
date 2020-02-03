import React from 'react'
import Header from '../Components/Header_Footer/Header'

// this is a react stateless component just for render purpouses
const Layout = (props) => {
    return (
        <div>
            {props.children}
            <Header />
        </div>
    )
}

export default Layout
