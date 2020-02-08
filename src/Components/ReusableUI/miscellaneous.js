import React from 'react'
import { Link } from 'react-router-dom'


// tag which sets the props to a stateless component
const MiscellaneousTag = (props) => {

    // this is the ELEMENTtag which is going to be returned and will ACCEPT the following PROPS 
    const template = <div
        style={{
            background: props.bck,
            fontSize : props.size,
            color: props.color,
            padding: '5px 10px',
            display: 'inline-block',
            fontFamily : 'Righteous'
        }}

    >
        {props.children}
    </div>

// if the Component has a link prop that is going to be true we are going to render
// the exact same component but wrapped around a link which will accept a ROUTE to our webpage
    if(props.link) {
    
        return(
            <Link to={props.linkTo}>
                {template}
            </Link>
        )
        // if the props.link is FALSE we are going to only represent a simple element without a Link
    } else {
        return template
    }


}

export default MiscellaneousTag


// because our data is in an object and we can not display it we need to put it into array/
// also we are taking the key of each match and storing it inside the object 
// this puts the datakey into the whole match object and that same object is inside an array and has 
// a new index key from the array
export const firebaseLooper = ( snapshot ) => {
    let data = [];
    snapshot.forEach(( childSnapshot ) => {
        data.push({
            ...childSnapshot.val(),
            id : childSnapshot.key
        })
    });
    return data

}

//creating a helper function to reverse the array
export const reverseArray = (actualArray) => {
    let reversedArray = [];
    
    for(let i = actualArray.length - 1; i>= 0; i--){
        reversedArray.push(actualArray[i])
    }
    return reversedArray
}