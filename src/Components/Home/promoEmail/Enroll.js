import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormFields from '../../ReusableUI/formFields'
import { validate } from '../../ReusableUI/miscellaneous'


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

        console.log(newFormdata);

        this.setState({
            formdata : newFormdata
        })
    }

    submitForm = () => {

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
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}

export default Enroll