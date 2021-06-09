import React from 'react';
import { useSelector } from 'react-redux';

const ShowUSer = () => {
    const { users } = useSelector((state) => state.users);
    return (
        <div>
            {(users || []).map((user, index) => (
                <div key={index}>
                    <h3> {user} </h3>
                </div>
            ))}
        </div>
    );
};

export default ShowUSer;
