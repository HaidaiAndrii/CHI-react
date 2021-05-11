import React from 'react';

export function TableRow({ user }) {
    
    return(
        <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    )
};