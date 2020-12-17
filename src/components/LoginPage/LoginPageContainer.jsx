import React from 'react';
import {
    hidePassword, removeEnteredPassword,
    showPassword,
    updateEnteredLogin,
    updateEnteredPassword
} from "../../redux/loginPage-reducer";
import {connect} from "react-redux";
import LoginPage from "./LoginPage";

class loginPageContainer extends React.Component {

    onPasswordChange = (ref) => {
        this.props.updateEnteredPassword(ref, ref);
    }
    onLoginChange = (ref) => {
        this.props.updateEnteredLogin(ref);
    }

    proximityHandler = (value) => {
        if (value === 0) {
            this.showPassword();
        } else if (value !== 0) {
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

    render() {
        return <LoginPage
            onPasswordChange={this.onPasswordChange}
            onLoginChange={this.onLoginChange}
            clickButtonHandler={this.clickButtonHandler}
            proximityHandler={this.proximityHandler}
            removeEnteredPassword={this.props.removeEnteredPassword}
            enteredLogin={this.props.enteredLogin}
            enteredPassword={this.props.enteredPassword}
            showingPassword={this.props.showingPassword}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        enteredPassword: state.LoginPage.enteredPassword,
        enteredLogin: state.LoginPage.enteredLogin,
        showingPassword: state.LoginPage.showingPassword,
    }
}

const LoginPageContainer = connect(mapStateToProps,
    {updateEnteredPassword, updateEnteredLogin, showPassword, hidePassword, removeEnteredPassword})(loginPageContainer);
export default LoginPageContainer;
