import React from 'react'
import { formatMs } from '@material-ui/core/styles/transitions'

const FormField = ({ formdata, id, change }) => {


    // function that renders the erorors of the state we are getting
    const showError = () => {
        let errorMessage = <div className="error_label">
                {
                    // if  validation is true and the formdata is valid
                    formdata.validation && !formdata.valid 
                    ?
                        formdata.validationMessage
                    : null

                }
        </div>


                return errorMessage
    }


    const renderTemplate = () => {
        let formTemplate = null;
        
        switch(formdata.element) {
            case('input') : 
                formTemplate = (
                    <div>
                        { formdata.showlabel ? 
                            <div className="label_inputs">
                                {formdata.config.label}
                            </div>
                            : ''
                        
                        }
                        <input 
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event) => change({event, id})}
                        />
                        {showError()}
                    </div>
                )
            break;
            case('select') :
                    formTemplate = (
                        <div>
                            { formdata.showlabel ? 
                                <div className="label_inputs">
                                    {formdata.config.label}
                                </div>
                                :null
                            }
                            <select 
                                value={formdata.value}
                                onChange={(event) => change({event, id})}
                            >
                                <option value="">select One</option>
                                {
                                    formdata.config.options.map((item) => (
                                        <option key={item.key} value={item.key}>
                                                {item.value}
                                        </option>
                                    ))
                                }
                            </select>
                            { showError()}
                        </div>
                    )
            break;
            // if theere isnt any case we return null if true well treturn the form
            default:
                formTemplate = null;
        }

        return formTemplate
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormField  
