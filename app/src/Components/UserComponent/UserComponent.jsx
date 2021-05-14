import React, { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory
} from "react-router-dom";
import styles from './styles.module.css';

export function UserComponent({ isLogined }) {
    let location  = useLocation();
    let history = useHistory() || [];

    // let [id, setId] = useState('');
    // let [name, setName] = useState('');
    // let [userName, setUserName] = useState('');
    // let [email, setEmail] = useState('');
    // let [website, setWebsite] = useState('');

    let [user , setUser] = useState({});
    
    function getUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/${location.pathname.slice(7)}`)
            .then(response => response.json())
            .then(json => {
                // setName(json.name);
                // setId(json.id);
                // setUserName(json.username);
                // setEmail(json.email);
                // setWebsite(json.website)
                setUser(json);
            });
    }

    useEffect(() => {
        getUser();
    },[]);

    async function saveChanges() {
         await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })

          history.push('/table');
    }

    function changeUserInfo(value, field) {
        let us = {
            ...user,
        }

        us[field] = value
        console.log(value,field, us)
        setUser(us)
        // console.log(info.value, info.id)
    }

    const FIELDS = ['id', 'name', 'username', 'email', 'website'];
    
    return(
        <div className={styles.table}>
            <h2>User</h2>
            <div className={styles.inputsSection}>
            
            { FIELDS.map(field => {
                    return (
                        <div className={styles.tableSection}>
                            <label className={styles.span} for={field}>{field}</label>
                            <input className={styles.input} id={field} type="text" value={user[field]} onChange={e => changeUserInfo(e.target.value, e.target.id)} readOnly={!isLogined} />
                        </div>
                    ) 
            
            })
            }
    

                {/* <div className={styles.tableSection}>
                    <label className={styles.span} for='id'>Id</label>
                    <input className={styles.input} id='id' type="text" value={id} onChange={(e) => setId(e.target.value)} name="id" readOnly={!isLogined} />
                </div>

                <div className={styles.tableSection}>
                    <label for='name' className={styles.span}>Name</label>
                    <input id='name' className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" readOnly={!isLogined} />
                </div>

                <div className={styles.tableSection}>
                    <label for='username' className={styles.span}>Username</label>
                    <input id='username' className={styles.input} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} name="userName" readOnly={!isLogined} />
                </div>

                <div className={styles.tableSection}>
                    <label for='email' className={styles.span}>Email</label
                    ><input id='email' className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" readOnly={!isLogined} />
                </div>

                <div className={styles.tableSection}>
                    <label for='website' className={styles.span}>Website</label>
                    <input id='website' className={styles.input} type="text" value={website} onChange={(e) => setWebsite(e.target.value)} name="website" readOnly={!isLogined} />
                </div> */}

            </div>

            <button className={styles.button} onClick={saveChanges}>Save changes</button>
        </div>

    )
};