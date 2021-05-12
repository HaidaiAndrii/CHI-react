import React from 'react';
import { useHistory } from "react-router-dom";

export function TableRow({ user  }) {
  let history = useHistory();

  function aboutUser(id) {
    history.push(`/table/${id}`);
    console.log('click', id)
  }

    return(
      <tr onClick={() => aboutUser(user.id)} >
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    )
};