import React from 'react';


export default function EditTechForm(props){

    const {itemData, editItemData, setEditItemData, change, submit} = props;

    return (
        <div>
            <form onSubmit={submit}>
                <label>Tech Image - URL Only
                    <input
                    type='text'
                    name='name'
                    value={editItemData.name}
                    onChange={change}
                    placeholder={itemData.name} />
                </label>

                <label>
                    <input
                    type='text'
                    name='description'
                    value={editItemData.description}
                    onChange={change}
                    placeholder={itemData.description} />
                </label>

                <label>
                    <input
                    type='text'
                    name='tech_img'
                    value={editItemData.tech_img}
                    onChange={change}
                    placeholder={itemData.tech_img} />
                </label>
            </form>
        </div>
    )
}