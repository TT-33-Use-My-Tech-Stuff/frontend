import React from 'react';
import { connect } from 'react-redux';


const AddItemForm = (props) => {

    const { addItemData, change, submit } = props;

    return(
        <div>
            <h2>Add a New Piece of Tech!</h2>
            <form onSubmit={submit}>
                <label>Name
                    <input
                    type='text'
                    name='name'
                    value={addItemData.name}
                    onChange={change} />
                </label>

                <label>Description
                    <input
                    type='text'
                    name='description'
                    value={addItemData.description}
                    onChange={change} />
                </label>
                <button>Submit New Tech</button>
            </form>
        </div>
    )
}

export default AddItemForm;