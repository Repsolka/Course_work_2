import React from 'react';
import {connect} from "react-redux";
import RegistrationPage from "./RegistrationPage";
import {
    hidePassword,
    showPassword, updateAccept, updateAge,
    updateEnteredEmail, updateEnteredName,
    updatePassword, updateTabIndex
} from "../../redux/registrationPage-reducer";
import Shake from 'shake.js';
import ShakeDirection from 'shake-direction';


class registrationPageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.newPasswordElement = React.createRef();
        this.newEmailElement = React.createRef();
        this.newNameElement = React.createRef();
        this.newAgeElement = React.createRef();
        this.newAcceptElement = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("deviceproximity", this.proximityHandler, false);
        window.addEventListener("shake", this.motionHandler, false);
        this.myShakeEvent.start();
        this.shakeDirect.start();
    }
    componentWillUnmount() {
        window.removeEventListener("deviceproximity", this.proximityHandler, false);
        window.removeEventListener("shake", this.motionHandler, false);
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

    onNameChange = () => {
        this.props.updateEnteredName(this.newNameElement.current.value);
    }
    onEmailChange = () => {
        this.props.updateEnteredEmail(this.newEmailElement.current.value);
    }
    onPasswordChange = () => {
        this.props.updatePassword(this.newPasswordElement.current.value);
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
    onTabIndexChange = (num) => {
        this.props.updateTabIndex(num);
    }
    onAgeChange = (value = this.newAgeElement.current.checked) => {
        this.props.updateAge(value);
    }
    onAcceptChange = (value = this.newAcceptElement.current.checked) =>{
        this.props.updateAccept(value);
    }
    motionHandler = () => {
        if(this.props.tabIndex === 1){
            if(!!this.newAgeElement.current.checked === true){
                this.onAgeChange(false);
            } else {
                this.onAgeChange(true);
            }
        }
        if(this.props.tabIndex === 2) {
            if (!!this.newAcceptElement.current.checked === true) {
                this.onAcceptChange(false);
            } else {
                this.onAcceptChange(true);
            }
        }
    }

    render() {
        return <RegistrationPage
            onTabIndexChange={this.onTabIndexChange}
            registrationFormData={this.props.registrationFormData}
            onNameChange={this.onNameChange}
            enteredName={this.props.enteredName}
            newNameElement={this.newNameElement}
            onEmailChange={this.onEmailChange}
            enteredEmail={this.props.enteredEmail}
            newEmailElement={this.newEmailElement}
            onPasswordChange={this.onPasswordChange}
            enteredPassword={this.props.enteredPassword}
            newPasswordElement={this.newPasswordElement}
            onAgeChange={this.onAgeChange}
            onAcceptChange={this.onAcceptChange}
            enteredAge={this.props.enteredAge}
            newAgeElement={this.newAgeElement}
            newAcceptElement={this.newAcceptElement}
            underEighteen={this.props.underEighteen}
            acceptAgreement={this.props.acceptAgreement}
            showingPassword={this.props.showingPassword}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        registrationFormData: state.RegistrationPage.registrationFormData,
        enteredPassword: state.RegistrationPage.enteredPassword,
        enteredEmail: state.RegistrationPage.enteredEmail,
        enteredName: state.RegistrationPage.enteredName,
        showingPassword: state.RegistrationPage.showingPassword,
        selectionStart: state.RegistrationPage.selectionStart,
        tabIndex: state.RegistrationPage.tabIndex,
        underEighteen: state.RegistrationPage.underEighteen,
        acceptAgreement: state.RegistrationPage.acceptAgreement
    }
}

const RegistrationPageContainer = connect(mapStateToProps,
    {
        updatePassword,
        updateEnteredEmail,
        updateEnteredName,
        updateAge,
        showPassword,
        hidePassword,
        updateTabIndex,
        updateAccept
    })(registrationPageContainer);
export default RegistrationPageContainer;