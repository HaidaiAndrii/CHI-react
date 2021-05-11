import React, { useState, useEffect } from 'react';
import { TableRow } from '../TableRow/TableRow';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
  // import { useHistory } from "react-router-dom";

// import style from './style.module.css';

export  function UsersTable() {
  let [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
      console.log(users);
       },[]);

     return (
      <div>
        <table>
          <thead>
            <tr><th>id</th><th>name</th><th>username</th><th>email</th></tr>
          </thead>
          <tbody>
            {users.length && users.map(user => {
             return <TableRow user={user} key={user.id} />
            })}
          </tbody>
          </table>
      </div>
     );

     function  getUsers() {
       return  fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers( data);
      });
    }
      
}