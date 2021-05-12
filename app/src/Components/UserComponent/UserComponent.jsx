import React, { useState, useEffect } from 'react';
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
//   Switch,
  useLocation
} from "react-router-dom";


export function UserComponent({ isLogined }) {
    let location  = useLocation();
    let [user, setUser] = useState({});
    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [userName, setUserName] = useState('');
    let [email, setEmail] = useState('');
    let [website, setWebsite] = useState('');
    
    function getUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/${location.pathname.slice(7)}`)
            .then(response => response.json())
            .then(json => {
                setUser(json);
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


    return(
        <div>
            <h2>{name}</h2>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} name="id" readOnly={!isLogined} />
            <br/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" readOnly={!isLogined} />
            <br/>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} name="userName" readOnly={!isLogined} />
            <br/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" readOnly={!isLogined} />
            <br/>
            <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} name="website" readOnly={!isLogined} />
        </div>

    )
};