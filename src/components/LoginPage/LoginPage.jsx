import React from 'react';
import style from './LoginPage.module.css'

let LoginPage = (props) => {

    let newPasswordElement = React.createRef();
    let newLoginElement = React.createRef();

    let onPasswordChange = () => {
        props.updateEnteredPassword(newPasswordElement.current.value);
    }
    let onLoginChange = () => {
        props.updateEnteredLogin(newLoginElement.current.value);
    }
    let Login = () => {
    }

    /*window.addEventListener('deviceproximity', function (event) {
        console.log("value: " + event.value, "max: " + event.max, "min: " + event.min);
    })*/

    return (
        <div>
            <div>
                <h2>Login Page</h2>
            </div>
            <div>Login:</div>
            <div>
                <input onChange={onLoginChange} ref={newLoginElement} value={props.enteredLogin}
                       placeholder={'Введите логин'}/>
            </div>
            <div>Password:</div>
            <div>
                <input onChange={onPasswordChange}
                       onMouseOver={() => {
                           props.mouseOver()
                       }}
                       onMouseOut={() => {
                           props.mouseOut()
                       }}
                       type={props.showPassword ? 'text' : 'password'}
                       ref={newPasswordElement} value={props.enteredPassword} placeholder={'Введите пароль'}/>
            </div>
            <button onClick={Login}>Login</button>
        </div>
    )
}

export default LoginPage;