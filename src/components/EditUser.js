import React from 'react'

export default function EditUser(props) {

    const { editData, setEditData, onChange } = props;

    return (
        <div>
            <form>
                <label>Username
                    <input
                    type='text'
                    name='username'
                    value={editData.username}
                    onChange={onChange} />
                </label>

                <label>Email
                    <input
                    type='text'
                    name='email'
                    value={editData.email}
                    onChange={onChange} />
                </label>

                <label>Role
                    <select
                    name='role_id'
                    value={editData.role_id}
                    onChange={onChange}>
                        <option value=''>Choose a Role</option>
                        <option value ='1'>Renter</option>
                        <option value='2'>Owner</option>
                    </select>
                </label>
                <button>Submit Changes</button>
            </form>
        </div>
    )
}
