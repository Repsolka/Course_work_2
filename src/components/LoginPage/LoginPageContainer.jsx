import React from 'react';
import {
    hidePassword, removeEnteredPassword,
    showPassword,
    updateEnteredLogin,
    updateEnteredPassword, updateSelectionStart, updateTabIndex
} from "../../redux/loginPage-reducer";
import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import Shake from 'shake.js';
import ShakeDirection from 'shake-direction';


class loginPageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.newPasswordElement = React.createRef();
        this.newLoginElement = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("deviceproximity", this.proximityHandler, false);
        window.addEventListener("shake", this.motionHandler, false);
        window.addEventListener('shake-x-negative', this.shakeNegativeDirectionHandler, false);
        window.addEventListener('shake-x-positive', this.shakePositiveDirectionHandler, false);
        this.myShakeEvent.start();
        this.shakeDirect.start();
    }
    componentWillUnmount() {
        window.removeEventListener("deviceproximity", this.proximityHandler, false);
        window.removeEventListener("shake", this.motionHandler, false);
        window.removeEventListener('shake-x-negative', this.shakeNegativeDirectionHandler, false);
        window.removeEventListener('shake-x-positive', this.shakePositiveDirectionHandler, false);
        this.myShakeEvent.stop();
        this.shakeDirect.stop();
    }

     myShakeEvent = new Shake({
        threshold: 10, // optional shake strength threshold
        timeout: 500 // optional, determines the frequency of event generation
    });

    shakeDirect = new ShakeDirection({
        threshold: 15,
        timeout: 500
    });

    shakeNegativeDirectionHandler = (value) => {
        this.newLoginElement.current.focus();
    }
    shakePositiveDirectionHandler = (value) => {
        this.newPasswordElement.current.focus();
    }
    onTabIndexChange = (num) => {
        this.props.updateTabIndex(num);
    }

    onPasswordChange = () => {
        this.props.updateEnteredPassword(this.newPasswordElement.current.value);
    }
    onLoginChange = () => {
        this.props.updateEnteredLogin(this.newLoginElement.current.value);
    }

    proximityHandler = (event) => {
        if (event.value === 0) {
            this.showPassword();
        } else if (event.value !== 0) {
            setTimeout(this.hidePassword, 500);
        }
    }
    hidePassword = () => {
        this.props.hidePassword();
    }
    showPassword = () => {
        this.props.showPassword();
    }
    clickButtonHandler = () => {
    }
    motionHandler = () => {
        if(this.props.tabIndex === 1){
            this.props.updateEnteredLogin(this.newLoginElement.current.value.slice(0,-1));
        } else if(this.props.tabIndex === 2) {
            this.props.updateEnteredPassword(this.newPasswordElement.current.value.slice(0,-1));
        }
    }

    render() {
        return <LoginPage
            onPasswordChange={this.onPasswordChange}
            onLoginChange={this.onLoginChange}
            onTabIndexChange={this.onTabIndexChange}
            clickButtonHandler={this.clickButtonHandler}
            proximityHandler={this.proximityHandler}
            motionHandler={this.motionHandler}
            enteredLogin={this.props.enteredLogin}
            enteredPassword={this.props.enteredPassword}
            showingPassword={this.props.showingPassword}
            newPasswordElement={this.newPasswordElement}
            newLoginElement={this.newLoginElement}
            tabIndex={this.props.tabIndex}
            passwordField={this.props.passwordField}
            loginField={this.props.loginField}
            passwordPlaceholder={this.props.passwordPlaceholder}
            loginPlaceholder={this.props.loginPlaceholder}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        passwordPlaceholder: state.LoginPage.LoginData.passwordData.placeholder,
        loginPlaceholder: state.LoginPage.LoginData.loginData.placeholder,
        passwordField: state.LoginPage.LoginData.passwordData.field,
        loginField: state.LoginPage.LoginData.loginData.field,
        enteredPassword: state.LoginPage.enteredPassword,
        enteredLogin: state.LoginPage.enteredLogin,
        showingPassword: state.LoginPage.showingPassword,
        selectionStart: state.LoginPage.selectionStart,
        tabIndex: state.LoginPage.tabIndex
    }
}

const LoginPageContainer = connect(mapStateToProps,
    {updateEnteredPassword, updateEnteredLogin, showPassword, hidePassword,
        removeEnteredPassword, updateSelectionStart, updateTabIndex})(loginPageContainer);
export default LoginPageContainer;
