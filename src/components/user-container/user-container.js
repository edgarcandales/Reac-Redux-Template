import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addingUserAction } from '../../redux/actions/userActions';

const UserContainer = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState('');

    const saveUser = () => {
        dispatch(addingUserAction(user));
        setUser('');
    };
    return (
        <div>
            <input
                type='text'
                name='user'
                value={user}
                id='user'
                onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={saveUser}>Save</button>
        </div>
    );
};

export default UserContainer;
