import React from 'react';
import style from './LoginPage.module.css';

let LoginPage = (props) => {

    return (
        <div>
            <div>
                <h2>Login Page</h2>
            </div>
            <div>Login:</div>
            <div>
                <input onChange={() => props.onLoginChange(props.newLoginElement.current.value)} ref={props.newLoginElement}
                       value={props.enteredLogin}
                       placeholder={'Введите логин'}/>
            </div>
            <div>Password:</div>
            <div>
                <input onChange={() => props.onPasswordChange}
                       id={"pass"}
                       type={props.showingPassword ? 'text' : 'password'}
                       ref={props.newPasswordElement} value={props.enteredPassword}
                       placeholder={'Введите пароль'}/>
            </div>
            <button onClick={props.clickButtonHandler}>Login</button>
        </div>
    )
}

export default LoginPage;

