import React, { useState, useEffect } from 'react';
import { TableRow } from '../TableRow/TableRow';


export  function UsersTable({isLogined, users, getUsers}) {

  let [sorted, setSorted] = useState(false);

    useEffect(() => {
      getUsers();
       }, [isLogined]);

       function sortBy(value) {
         console.log(value);

        if(value === 'id') {

          users.sort((a,b) => {
            return a.id - b.id;
          }) 
        }
          else {
            users.sort((a,b) => {
             let valueA = a[value.trim()].toLowerCase();
             let valueB = b[value.trim()].toLowerCase();

             if(valueA < valueB) {
               return -1;
             }

             if(valueA > valueB) {
               return 1;
             }

             return 0
            })
          }

          setSorted(!sorted)
       }

     return (
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={(e) => sortBy(e.target.innerHTML)}>id</th>
              <th  onClick={(e) => sortBy(e.target.innerHTML)}>name</th><th  onClick={(e) => sortBy(e.target.innerHTML)}>username</th>
              <th  onClick={(e) => sortBy(e.target.innerHTML)}> email</th>
              </tr>
          </thead>
          <tbody>
            {users.length && users.map(user => {
             return <TableRow user={user} key={user.id}  />
            })}
          </tbody>
          </table>
      </div>
     );
}