import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormFields from '../../ReusableUI/formFields'
import { validate } from '../../ReusableUI/miscellaneous'

import {firebasePromotions} from '../../../firebase';

class Enroll extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formError: false,               
            formSuccess: '',
            formdata: {                     
                email: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'email_input',
                        type: 'email',
                        placeholder: 'Enter your email!'
                    },
                    validation: {
                        required: true,
                        email: true
                    },
                    valid: false,
                    validationMessage: ''
                }
            }
        }
    }


    updateForm = (element) => {
     
        //crating a new copty of the formdata
        const newFormdata = {...this.state.formdata}
        //with this we are getting a new copy of the email state
        const newElement = { ...newFormdata[element.id]} 

        //we createda new element with the newly updates values
        newElement.value = element.event.target.value

        // here we call the function which is going to validate the updated value this.state.value and this.state.validationMessage we are getting
        // this functions returns an array with two values and here we are storing that rresult which this function is going to return 
        let validData = validate(newElement)

        // here we update this.state.valid 
        newElement.valid = validData[0] // returns true or false
        // here we update this.state.validationMessage
        newElement.validationMessage = validData[1]  // message or empty

        // we are updating the new element with the new state
        newFormdata[element.id] = newElement

  

        this.setState({
            formError : false,
            formdata : newFormdata
        })
    }


    resetFormSuccess = (type) => {
        const newFormdata = {...this.state.formdata}

        for(let key in newFormdata) {
            newFormdata[key].value = ''
            newFormdata[key].valid = false;
            newFormdata[key].validationMessage = '';

        }
        this.setState({
            formError : false,
            formdata : newFormdata,
            formSuccess : type ? 'Congratulations' : 'Ops Email already used'
        });

        this.successMessage();

    }

    successMessage = () => {
        setTimeout(() => {
            this.setState({
                formSuccess : ''
            })
        }, 2000)
    }


    submitForm = (event) => {
        event.preventDefault();

        //we are going to submit an object with keys and values
        let dataToSubmit = {};
        let formIsValid  = true;
        // we are gogin to go trought the state and check if they are valid or true or something

        for( let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if(formIsValid){
          // the first request will check if the user is already is the database
          // https://firebase.google.com/docs/reference/js/firebase.database.Reference.html#orderbychild
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once('value')
            .then((snapshot) => {
                if(snapshot.val() === null){
                    //pushing the data to database if we have a new user
                    firebasePromotions.push(dataToSubmit)
                    this.resetFormSuccess(true)

                } else {
                    // if email is being taken
                    this.resetFormSuccess(false)
                    // console.log(snapshot.val());
                }
           
                
            })
           
        } else {
            this.setState({    
                formError : true
            })
        }
        
    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormFields 
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.updateForm(element)}


                            />
                            {this.state.formError 
                            ? 
                            <div className="error_label">Something is wrong try again</div>
                            :
                            null
                            }

                            <div className="success_label">{this.state.formSuccess}</div>
                            <button onClick={(event) => this.submitForm(event)}>Enroll</button>
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}

export default Enroll