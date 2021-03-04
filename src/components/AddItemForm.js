import React from 'react';
import { connect } from 'react-redux';


const AddItemForm = () => {

    return(
        <div>
            <form>
                <label>Name
                    <input />
                </label>

                <label>Description
                    <input />
                </label>
            </form>
        </div>
    )
}

export default connect(null, {})(AddItemForm);