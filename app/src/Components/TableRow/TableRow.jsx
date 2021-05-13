import React from 'react';
import { useHistory } from "react-router-dom";
import styles from './styles.module.css';

export function TableRow({ user  }) {
  let history = useHistory();

  function aboutUser(id) {
    history.push(`/table/${id}`);
  }

    return(
      <tr className={styles.tableTr} onClick={() => aboutUser(user.id)} >
        <td className={styles.tableTd}>{user.id}</td>
        <td className={styles.tableTd}>{user.name}</td>
        <td className={styles.tableTd}>{user.username}</td>
        <td className={styles.tableTd}>{user.email}</td>
      </tr>
    )
};