import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import style from './style.module.css';

export const Login = ({isLogined, setLoginStatus, defaultUser  }) => {
    let [userLogin, setLogin] = useState(false)
    let [userPass, setPass] = useState(false)
    let history = useHistory();
   

    useEffect(() => {
        console.log(isLogined);

    },[]);

    async function logining () {

        if(userLogin === defaultUser.login && userPass === defaultUser.pass) {
            setLoginStatus(true);

            console.log('your in');
            localStorage.removeItem('reactUser');
            console.log(localStorage.getItem('reactUser'))

            localStorage.setItem('reactUser' ,JSON.stringify({
                login: 'user',
                pass: 'user',
                isLogined: true,
            }));
            history.push("/table");
        }
    }

return(
    <div className={style.formbox}>
          <form className={style.form}>
          <h2 className={style.title}>Sign In</h2>
          <input className={style.input} type="text" placeholder="Login" onChange={(event) => setLogin(event.target.value)} />
          <input   className={style.input} type="pass" placeholder="Password" onChange={(event) => setPass(event.target.value)} />
          <button  className={style.button} type="button" onClick={logining}>Login</button>
          </form>  
        </div>
     )   

};

