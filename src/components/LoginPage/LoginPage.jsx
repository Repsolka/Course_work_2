import React from 'react';
import style from './LoginPage.module.css';
import Shake from 'shake.js';

let LoginPage = (props) => {

    let newPasswordElement = React.useRef();
    let newLoginElement = React.createRef();

    let myShakeEvent = new Shake({
        threshold: 15, // optional shake strength threshold
        timeout: 500 // optional, determines the frequency of event generation
    });
    myShakeEvent.start();

    let motionHandler = () => {
        myShakeEvent.stop();
        props.removeEnteredPassword();
    }

    return (
        <div>
            <span>{window.addEventListener("deviceproximity", function (event) {
                props.proximityHandler(event.value);
            }, false)}</span>
            <span>{window.addEventListener("shake", motionHandler, false)}</span>
            <div>
                <h2>Login Page</h2>
            </div>
            <div>Login:</div>
            <div>
                <input onChange={() => props.onLoginChange(newLoginElement.current.value)} ref={newLoginElement}
                       value={props.enteredLogin}
                       placeholder={'Введите логин'}/>
            </div>
            <div>Password:</div>
            <div>
                <input onChange={() => props.onPasswordChange(newPasswordElement.current.value)}
                       id={"pass"}
                       type={props.showingPassword ? 'text' : 'password'}
                       ref={newPasswordElement} value={props.enteredPassword}
                       placeholder={'Введите пароль'}/>
            </div>
            <button onClick={props.clickButtonHandler}>Login</button>
        </div>
    )
}

export default LoginPage;

