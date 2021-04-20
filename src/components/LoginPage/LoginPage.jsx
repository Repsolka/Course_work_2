import React from 'react';
import style from './LoginPage.module.css';

let LoginPage = (props) => {
console.log(props)
    return (
        <div>
            <div>
                <h2>Login Page</h2>
            </div>
            <div>Login:</div>
            <div>
                <input onChange={() => props.onLoginChange(props.newLoginElement.current.value)}
                       onFocus={() => props.onTabIndexChange(1)}
                       ref={props.newLoginElement}
                       value={props.enteredLogin}
                       placeholder={'Введите логин'}
                       tabIndex='1'/>
            </div>
            <div>Password:</div>
            <div>
                <input onChange={() => props.onPasswordChange(props.newPasswordElement.current.value)}
                       onFocus={() => props.onTabIndexChange(2)}
                       id={"pass"}
                       type={props.showingPassword ? 'text' : 'password'}
                       ref={props.newPasswordElement} value={props.enteredPassword}
                       placeholder={'Введите пароль'}
                       tabIndex='1'/>
            </div>
            <button onClick={props.clickButtonHandler} Link>Login</button>
        </div>
    )
}

export default LoginPage;

