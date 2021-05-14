import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { sendUser } from "../../API/fetchs";
import { getUser } from "../../API/fetchs";

export function UserComponent({ isLogined }) {
  let location = useLocation();
  let history = useHistory() || [];

  let [user, setUser] = useState({});


  useEffect(() => {
    getUser(location.pathname.slice(7))
    .then(json => setUser(json));
  }, []);

  function saveChanges() {
    sendUser(user);
    history.push("/table");
  }

  function changeUserInfo(value, field) {
    let us = {
      ...user,
      [field]: value,
    };

    setUser(us);
  }

  const FIELDS = ["id", "name", "username", "email", "website"];

  return (
    <div className={styles.table}>
      <h2>User</h2>
      <div className={styles.inputsSection}>

        {FIELDS.map((field) => {
          return (
            <div className={styles.tableSection}>
              <label className={styles.span} for={field}>
                {field}
              </label>
              <input
                className={styles.input}
                id={field}
                type="text"
                value={user[field]}
                onChange={(e) => changeUserInfo(e.target.value, e.target.id)}
                readOnly={!isLogined}
              />
            </div>
          );
        })}

      </div>
      <button className={styles.button} onClick={saveChanges}>
        Save changes
      </button>
    </div>
  );
}
