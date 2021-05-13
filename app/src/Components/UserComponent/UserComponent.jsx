import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  useHistory
} from "react-router-dom";
import styles from './styles.module.css';



export function UserComponent({ isLogined }) {
    let location  = useLocation();
    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [userName, setUserName] = useState('');
    let [email, setEmail] = useState('');
    let [website, setWebsite] = useState('');
    let history = useHistory() || [];
    
    function getUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/${location.pathname.slice(7)}`)
            .then(response => response.json())
            .then(json => {
                setName(json.name);
                setId(json.id);
                setUserName(json.username);
                setEmail(json.email);
                setWebsite(json.website)
            });
    }

    useEffect(() => {
        getUser();
    },[]);

    async function saveChanges() {
        let user = {
            id,
            name,
            username: userName,
            email,
            website
        }

         let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })

          history.push('/table');
    }


    return(
        <div className={styles.table}>
            <h2>User</h2>
            <div className={styles.inputsSection}>
                <div className={styles.tableSection}>
                    <label className={styles.span} for='id'>Id</label><input className={styles.input} id='id' type="text" value={id} onChange={(e) => setId(e.target.value)} name="id" readOnly={!isLogined} />
                </div>
                <div className={styles.tableSection}>
                    <label for='name' className={styles.span}>Name</label><input id='name' className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" readOnly={!isLogined} />
                </div>

                <div className={styles.tableSection}>
                    <label for='username' className={styles.span}>Username</label><input id='username' className={styles.input} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} name="userName" readOnly={!isLogined} />
                </div>

                <div className={styles.tableSection}>
                    <label for='email' className={styles.span}>Email</label><input id='email' className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" readOnly={!isLogined} />
                </div>

                <div className={styles.tableSection}>
                    <label for='website' className={styles.span}>Website</label><input id='website' className={styles.input} type="text" value={website} onChange={(e) => setWebsite(e.target.value)} name="website" readOnly={!isLogined} />
                </div>
            </div>

            <button className={styles.button} onClick={saveChanges}>Save changes</button>
        </div>

    )
};