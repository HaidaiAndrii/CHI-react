import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Login } from './Components/Login/Login';
import { UsersTable } from './Components/usersTable/UsersTable';
import { UserComponent } from './Components/UserComponent/UserComponent';

function App() {
  let [selectedUser, setUser] = useState();
  let [users, setUsers] = useState([]);
  let history = useHistory() || [];
  let [defaultUser, setDefUser] = useState({});
  useEffect(() => {
    checkUser();
  },[]);
  
  let [isLogined, setLoginStatus] = useState(localStorage.getItem('reactUser') ? (JSON.parse(localStorage.getItem('reactUser')).isLogined) : false);
  console.log((JSON.parse(localStorage.getItem('reactUser'))))

  async function checkUser() {
    if(!localStorage.getItem('reactUser')) {
        localStorage.setItem('reactUser',JSON.stringify({
            login: 'user',
            pass: 'user',
            isLogined: false
        }));
    }
    setDefUser(JSON.parse(localStorage.getItem('reactUser')));
}

  function logOut() {
    localStorage.setItem('reactUser',JSON.stringify({
      login: 'user',
      pass: 'user',
      isLogined: false
  }));

  history.push("/login");

  setLoginStatus((JSON.parse(localStorage.getItem('reactUser')).isLogined));
  }

  function  getUsers() {
    return  fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => {
     return response.json();
   })
   .then((data) => {
     setUsers(data);
     return data;
       });
 }

  return (
    <Router>
      <div className="header">

            <Link className="link" to="/table">Table</Link>

            {isLogined ?   <a className="link" href="#" onClick={logOut}>Log out</a> :  <Link className="link" to="/login">Login</Link> }

        </div>
        <Switch>
          <Route path="/login">
            {isLogined ? <Redirect push to="/table" /> : <Login isLogined={isLogined} setLoginStatus={setLoginStatus} defaultUser={defaultUser} />}
          </Route>
          <Route path="/table/:id">
            <UserComponent  isLogined={isLogined} users={users} selectedUser={selectedUser} getUsers={getUsers} />
          </Route>

          <Route path="/table">
            {isLogined ? <UsersTable users={users} setUsers={setUsers} isLogined={isLogined} getUsers={getUsers} /> : <Redirect push to="/login" />}
          </Route>
        </Switch>
    </Router>
  );
}



export default App;
