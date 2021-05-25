import React from 'react';
import style from './LoginPage.module.css';
import {NavLink} from "react-router-dom";

let LoginPage = (props) => {
    return (
        <div className={style.loginPage}>
            <h2>Login Page</h2>
            <div className={style.loginBlock}>
                <label>{props.loginField}</label>
                <input onChange={() => props.onLoginChange(props.newLoginElement.current.value)}
                       onFocus={() => props.onTabIndexChange(1)}
                       ref={props.newLoginElement}
                       value={props.enteredLogin}
                       placeholder={props.loginPlaceholder}
                       tabIndex='1'
                       required/>
            </div>
            <div className={style.loginBlock}>
                <label>{props.passwordField}</label>
                <input onChange={() => props.onPasswordChange(props.newPasswordElement.current.value)}
                       onFocus={() => props.onTabIndexChange(2)}
                       id={"pass"}
                       type={props.showingPassword ? 'text' : 'password'}
                       ref={props.newPasswordElement} value={props.enteredPassword}
                       placeholder={props.passwordPlaceholder}
                       tabIndex='1'
                       required/>
            </div>
            <div className={style.loginButtonsContainer}>
            <button onClick={props.clickButtonHandler} className={style.loginButton}>Login</button>
            <NavLink to='/registration'><button className={style.loginButton}>Register now</button></NavLink>
            </div>
        </div>
    )
}

export default LoginPage;

