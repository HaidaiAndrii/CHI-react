import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from './Components/Login/Login';
import { UsersTable } from './Components/usersTable/UsersTable';

function App() {
  return (
    <Router>
      {/* <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr /> */}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/table">
            <UsersTable />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
}



export default App;
