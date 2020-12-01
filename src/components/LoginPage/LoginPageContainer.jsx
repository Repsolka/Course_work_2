import React from 'react';
import {
    hidePasswordAC,
    showPasswordAC,
    updateEnteredLoginAC,
    updateEnteredPasswordAC
} from "../../redux/loginPage-reducer";
import {connect} from "react-redux";
import LoginPage from "./LoginPage";

let mapStateToProps = (state) => {
    return {
        enteredPassword: state.LoginPage.enteredPassword,
        enteredLogin: state.LoginPage.enteredLogin,
        showPassword: state.LoginPage.showPassword
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateEnteredPassword: (text) => {
            dispatch(updateEnteredPasswordAC(text));
        },
        updateEnteredLogin: (text) => {
            dispatch(updateEnteredLoginAC(text));
        },
        mouseOver: () => {
            dispatch(showPasswordAC());
        },
        mouseOut: () => {
            dispatch(hidePasswordAC());
        }
    }
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export  default LoginPageContainer;
