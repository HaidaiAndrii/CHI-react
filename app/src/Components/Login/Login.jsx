import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { useHistory } from "react-router-dom";

import style from './style.module.css';



export const Login = () => {
    let [isLogin, setLoginStatus] = useState(false)
    let [userLogin, setLogin] = useState(false)
    let [userPass, setPass] = useState(false)
    let history = useHistory();

    function logining () {
        validation(userLogin, userPass);
        console.log(isLogin)
        if(isLogin) {
            console.log('your in');
            console.log(userLogin);
            console.log(userPass);
            history.push("/table");
        }
    }
    
    function validation(login, pass) {
        setLoginStatus(true);

        if(login.length === 0) {
            console.log('login is empty')
            setLoginStatus(false);
        }
        
        if(pass.length === 0) {
            console.log('pass is empty');
            setLoginStatus(false);
        }
    }

return(
    <div className={style.formbox}>
          <form className={style.form}>
            <title className={style.title}></title>
          <input className={style.input} type="text" placeholder="Login" onChange={(event) => setLogin(event.target.value)} />
          <input   className={style.input} type="pass" placeholder="Password" onChange={(event) => setPass(event.target.value)} />
          <button  className={style.button} type="button" onClick={logining}>Login</button>
          </form>  
        </div>
     )   

};

