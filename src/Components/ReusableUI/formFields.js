import React from 'react'

const FormFields = ({ formdata, id }) => {


    const renderTemplate = () => {
        let formTemplate = null;
        
        switch(formdata.element) {
            case('input') : 
                formTemplate = (
                    <div>
                        <input 
                            {...formdata.config}
                            value={formdata.value}
                        />
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

export default FormFields  
