import React from 'react'
import { useSelector } from 'react-redux';



const PersonalList = () => {
    const { personas } = useSelector((state) => state.personas);
    return (
        <table>
            <tr>
                <th>User</th>
                <th>Age</th>
            </tr>
            {(personas || []).map((user, index) => (
                <tr key={index}>
                    <th>{user.name}</th>
                    <th>{user.age}</th>
                </tr>
            ))}
        </table>
    );
}

export default PersonalList
