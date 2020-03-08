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
            padding: props.padding,
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

//function that is going to validate the form
// and also update the state  this.state.valid and this.state.validationMessage
export const validate = (element) => {
    let error = [true, ''];

    // email validation
    if(element.validation.email) {
        const valid = /\S+@\S+\.\S/.test(element.value);
        const message = `${!valid ? 'this requires a valid email' : ''}`
        error = !valid ? [valid, message] : error

    }

    // by default validation in the state is false 
    // this function is called into where the state is being updated that is how we have acces
    // to the state through this function also and this function will check if the 
    // if in the updated state the validation is TRUE or false
    if(element.validation.required){
        // this will check if the validation is empty or if it has a value will return true or if id doesn't have a value it'll return false
        const valid = element.value.trim() !== '';
        // if valid is not true itll say this field is required if it is true we can start an empty string into an Array
        const message = `${!valid ? 'this field is required' : ''}`
        // if valid is not true we return an error if it is we return 
        //true in the valid we say that the input does have a value meaning valid will be true
        // and the message variable will return true also meaning itll allow  us to store the value into an empty string into an ARRAY
        error = !valid ? [valid, message] : error
    }

    return error
}