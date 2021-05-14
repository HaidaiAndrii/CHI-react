import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { UsersTable } from "./Components/usersTable/UsersTable";
import { UserComponent } from "./Components/UserComponent/UserComponent";

function App() {
  let [users, setUsers] = useState([]);
  let history = useHistory() || [];
  let [defaultUser, setDefUser] = useState({});
  useEffect(() => {
    checkUser();
  }, []);

  let [isLogined, setLoginStatus] = useState({});

  async function checkUser() {
    if (!localStorage.getItem("reactUser")) {
      localStorage.setItem(
        "reactUser",
        JSON.stringify({
          login: "user",
          pass: "user",
          isLogined: false,
        })
      );
    }
    setDefUser(JSON.parse(localStorage.getItem("reactUser")));
    setLoginStatus(JSON.parse(localStorage.getItem("reactUser")).isLogined);
  }

  function logOut() {
    localStorage.setItem(
      "reactUser",
      JSON.stringify({
        ...defaultUser,
        isLogined: false,
      })
    );

    history.push("/login");

    setLoginStatus(false);
  }

 
  return (
    <Router>
      <div className="header">
        <Link className="link" to="/table">
          Table
        </Link>
        {isLogined ? (
          <a className="link" href="#" onClick={logOut}>
            Log out
          </a>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </div>

      <Switch>
        <Route path="/login">
          {isLogined ? (
            <Redirect push to="/table" />
            ) : (
              <Login
              isLogined={isLogined}
              setLoginStatus={setLoginStatus}
              defaultUser={defaultUser}
              />
              )}
        </Route>
        <Route path="/table/:id">
          <UserComponent isLogined={isLogined} />
        </Route>

        <Route path="/table">
          {isLogined ? (
            <UsersTable
            users={users}
            setUsers={setUsers}
            isLogined={isLogined}
            // getUsers={getUsers}
            setUsers={setUsers}
            />
            ) : (
              <Redirect push to="/login" />
              )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
