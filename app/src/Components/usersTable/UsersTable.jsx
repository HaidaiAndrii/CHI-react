import React, { useState, useEffect } from "react";
import { TableRow } from "../TableRow/TableRow";
import Header from "./Header";
import { getUsers } from '../../API/fetchs'

import styles from "./styles.module.css";

export function UsersTable({setUsers, isLogined, users }) {
  let [sorted, setSorted] = useState(false);
  let [sortedField, setSortedField] = useState('');

  useEffect(() => {
     getUsers().then(data => setUsers(data))
  }, [isLogined]);

  function handleSort(field, arr) {
    if (Number.isInteger(arr[0][field])) {
      users.sort((a, b) => {
        if (sorted) {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
    } else {
      arr.sort((a, b) => {
        let valueA = a[field.trim()].toLowerCase();
        let valueB = b[field.trim()].toLowerCase();
        
        if (sorted) {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      });
    }
    
    setSortedField(field);
    setSorted(!sorted);
  }

  const arr = [
    { id: 1, title: "name" },
    { id: 2, title: "username" },
    { id: 3, title: "email" },
  ];

  return (
    <div>
      <h2 className={styles.title}>Users List</h2>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableTr}>
            <th className={styles.tableTh} onClick={() => handleSort("id", users)}>
               {sortedField === 'id' && <div
                className={
                  sorted
                  ? `${styles.filterArrow} ${styles.downArrow}`
                  : `${styles.filterArrow} ${styles.upArrow}`
                }
                ></div>
              }
                id
            </th>
            <Header headings={arr} users={users} handleSort={handleSort} sorted={sorted} sortedField={sortedField} />
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((user) => {
              return <TableRow user={user} key={user.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
