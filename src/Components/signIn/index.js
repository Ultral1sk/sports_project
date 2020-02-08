import React, { Component } from 'react'
import FormField from '../ReusableUI/formField'
import { validate } from '../ReusableUI/miscellaneous'


class SignIn extends Component {

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
                },
                password: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'password_input',
                        type: 'password',
                        placeholder: 'Enter your password!'
                    },
                    validation: {
                        required: true,

                    },
                    valid: false,
                    validationMessage: ''
                }
            }
        }
    }

    updateForm = (element) => {

        //crating a new copty of the formdata
        const newFormdata = { ...this.state.formdata }
        //with this we are getting a new copy of the email state
        const newElement = { ...newFormdata[element.id] }

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
            formError: false,
            formdata: newFormdata
        })
    }


    submitForm = (event) => {
        event.preventDefault();

        //we are going to submit an object with keys and values
        let dataToSubmit = {};
        let formIsValid = true;
        // we are gogin to go trought the state and check if they are valid or true or something

        for (let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if (formIsValid) {
            console.log(dataToSubmit)

        } else {
            this.setState({
                formError: true
            })
        }

    }


    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{ margin: '100px' }}>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element) => this.updateForm(element)}


                        />
                        <FormField
                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element) => this.updateForm(element)}


                        />

                        <button onClick={(event) => this.submitForm(event)}>Log In</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn
