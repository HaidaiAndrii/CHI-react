import React, { useState, useEffect } from "react";
import { TableRow } from "../TableRow/TableRow";
import Header from "./Header";

import styles from "./styles.module.css";

export function UsersTable({ isLogined, users, getUsers }) {
  let [sorted, setSorted] = useState(false);

  useEffect(() => {
    getUsers();
  }, [isLogined]);

  function sortBy(value) {
    if (value.slice(0, 2) === "id") {
      users.sort((a, b) => {
        if (sorted) {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
    } else {
      users.sort((a, b) => {
        let valueA = a[value.trim()].toLowerCase();
        let valueB = b[value.trim()].toLowerCase();

        if (valueA < valueB) {
          if (sorted) {
            return -1;
          } else {
            return 1;
          }
        }

        if (valueA > valueB) {
          if (sorted) {
            return 1;
          } else {
            return -1;
          }
        }

        return 0;
      });
    }

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
            <th
              className={styles.tableTh}
              onClick={(e) => sortBy(e.target.innerHTML)}
            >
              id
              <div
                className={
                  !sorted
                    ? `${styles.filterArrow} ${styles.downArrow}`
                    : `${styles.filterArrow} ${styles.upArrow}`
                }
              ></div>
            </th>
            <Header headings={arr} handleSort={sortBy} />

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
