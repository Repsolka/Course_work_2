import React from 'react';
import {
    hidePassword, removeEnteredPassword,
    showPassword,
    updateEnteredLogin,
    updateEnteredPassword, updateSelectionStart
} from "../../redux/loginPage-reducer";
import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import Shake from 'shake.js';

class loginPageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.newPasswordElement = React.createRef();
        this.newLoginElement = React.createRef();
    }


    componentDidMount() {
        window.addEventListener("deviceproximity", this.proximityHandler, false);
       // window.addEventListener("deviceorientation", this.orientationHandler, false);
        window.addEventListener("shake", this.motionHandler, false);
        this.myShakeEvent.start();
    }
    componentWillUnmount() {
        window.removeEventListener("deviceproximity", this.proximityHandler, false);
        window.removeEventListener("deviceorientation", this.orientationHandler, false);
        window.removeEventListener("shake", this.motionHandler, false);
        this.myShakeEvent.stop();
    }

     myShakeEvent = new Shake({
        threshold: 15, // optional shake strength threshold
        timeout: 500 // optional, determines the frequency of event generation
    });


    onPasswordChange = () => {
        this.props.updateEnteredPassword(this.newPasswordElement.current.value);
    }
    onLoginChange = () => {
        this.props.updateEnteredLogin(this.newLoginElement.current.value);
    }

    /*orientationHandler = (event) => {
        if(event.gamma > 35){
            alert("1")
            this.props.updateSelectionStart(event.gamma)
        }
    }*/

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
        this.props.updateEnteredPassword(this.newPasswordElement.current.value.slice(0,-1));
    }

    render() {
        return <LoginPage
            onPasswordChange={this.onPasswordChange}
            onLoginChange={this.onLoginChange}
            clickButtonHandler={this.clickButtonHandler}
            proximityHandler={this.proximityHandler}
            motionHandler={this.motionHandler}
            enteredLogin={this.props.enteredLogin}
            enteredPassword={this.props.enteredPassword}
            showingPassword={this.props.showingPassword}
            newPasswordElement={this.newPasswordElement}
            newLoginElement={this.newLoginElement}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        enteredPassword: state.LoginPage.enteredPassword,
        enteredLogin: state.LoginPage.enteredLogin,
        showingPassword: state.LoginPage.showingPassword,
        selectionStart: state.LoginPage.selectionStart
    }
}

const LoginPageContainer = connect(mapStateToProps,
    {updateEnteredPassword, updateEnteredLogin, showPassword, hidePassword, removeEnteredPassword, updateSelectionStart})(loginPageContainer);
export default LoginPageContainer;
