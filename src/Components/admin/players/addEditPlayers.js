import React, { Component } from 'react'

import AdminLayout from '../../../HOC/AdminLayout'

import FormField from '../../ReusableUI/formField'
import { validate } from '../../ReusableUI/miscellaneous'

import FileUploader from '../../ReusableUI/fileuploader'

import { firebasePlayers, firebaseDB, firebase } from '../../../firebase';
import { firebaseLooper } from '../../ReusableUI/miscellaneous'


class AddEditPlayers extends Component {

    constructor(props) {
        super(props)

        this.state = {
            playerId: '',
            formType: '',
            formError: false,
            formSuccess: '',
            defaultImg: '',
            formdata: {
                name: {
                    element: 'input',
                    value: '',
                    config: {
                        label: 'Player Name',
                        name: 'name_input',
                        type: 'text'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    validationMessage: '',
                    showlabel: true
                },
                lastname: {
                    element: 'input',
                    value: '',
                    config: {
                        label: 'Player Last Name',
                        name: 'lastname_input',
                        type: 'text'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    validationMessage: '',
                    showlabel: true
                },
                number: {
                    element: 'input',
                    value: '',
                    config: {
                        label: 'Player number',
                        name: 'number_input',
                        type: 'text'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    validationMessage: '',
                    showlabel: true
                },
                position: {
                    element: 'select',
                    value: '',
                    config: {
                        label: 'Select a position',
                        name: 'select_position',
                        type: 'select ',
                        options: [
                            { key: 'Keeper', value: 'Keeper' },
                            { key: 'Defence', value: 'Defence' },
                            { key: 'Midfielder', value: 'Midfielder' },
                            { key: 'Striker', value: 'Striker' },

                        ]
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    validationMessage: '',
                    showlabel: true
                },
                image : {
                    element : 'image',
                    value : '',
                    validation : {
                        required: true
                    },
                    valid: true
                }
            }
        }
    }

    componentDidMount() {
        const playerId = this.props.match.params.id

        if (!playerId) {
            this.setState({
                formType: 'Add player'
            })

        } else {

        }
    }

    updateForm(element) {
        const newFormdata = { ...this.state.formdata }
        const newElement = { ...newFormdata[element.id] }

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

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
            // console.log(dataToSubmit);


        } else {
            this.setState({
                formError: true
            });
        }

    }

    resetImage = () => {

    }

    storeFilename = () => {
        
    }

    render() {
        return (
            <AdminLayout>
                <div className="editplayers_dialog_wrapper">
                    <h2>{this.state.formType}</h2>
                </div>
                <div>
                    <form onSubmit={(evt) => this.onSubmit(evt)}>

                    <FileUploader 
                        dir="players" // dir is a folder path to the firebase db
                        tag={"Player image"}
                        defaultImg={this.state.defaultImg}
                        defaultImgName={this.state.formdata.image.value}
                        resetImagee={() => this.resetImage()}
                        filename={(filename) => this.storeFilename(filename)}
                    />

                        <FormField
                            id={'name'}
                            formdata={this.state.formdata.name}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            id={'lastname'}
                            formdata={this.state.formdata.lastname}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            id={'number'}
                            formdata={this.state.formdata.number}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            id={'position'}
                            formdata={this.state.formdata.position}
                            change={(element) => this.updateForm(element)}
                        />


                        <div className="success_label">{this.state.formSuccess}</div>
                        {this.state.formError ?
                            <div className="error_label">
                                Something is wrong
                                </div>
                            : ''
                        }
                        <div className="admin_submit">
                            <button onClick={(event) => this.submitForm(event)}>
                                {this.state.formType}
                            </button>
                        </div>

                    </form>
                </div>
            </AdminLayout>

        )
    }
}

export default AddEditPlayers
