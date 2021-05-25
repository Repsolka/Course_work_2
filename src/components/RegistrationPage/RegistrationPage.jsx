import React from 'react';
import style from './RegistrationPage.module.css';

let RegistrationPage = (props) => {
    return (
        <form id={style.form}>
            <div id={style.formContainer}>
                <h2>Registration form</h2>
                <div>
                    <div className={style.registerBlock}>
                        <label>{props.registrationFormData.Name.field}</label>
                        <input type={props.registrationFormData.Name.type}
                               placeholder={props.registrationFormData.Name.placeholder}
                               onChange={() => props.onNameChange(props.newNameElement.current.value)}
                               onFocus={() => props.onTabIndexChange(0)}
                               ref={props.newNameElement}
                               value={props.enteredName}
                               required/>
                    </div>
                    <div className={style.registerBlock}>
                        <label>{props.registrationFormData.Email.field}</label>
                        <input type={props.registrationFormData.Email.type}
                               placeholder={props.registrationFormData.Email.placeholder}
                               onChange={() => props.onEmailChange(props.newEmailElement.current.value)}
                               onFocus={() => props.onTabIndexChange(0)}
                               ref={props.newEmailElement}
                               value={props.enteredEmail}
                               required/>
                    </div>
                    <div className={style.registerBlock}>
                        <label>{props.registrationFormData.Password.field}</label>
                        <input placeholder={props.registrationFormData.Password.placeholder}
                               onChange={() => props.onPasswordChange(props.newPasswordElement.current.value)}
                               type={props.showingPassword ? 'text' : 'password'}
                               onFocus={() => props.onTabIndexChange(0)}
                               ref={props.newPasswordElement}
                               value={props.enteredPassword}
                               required/>
                    </div>
                    <div className={style.registerBlock}>
                        <label>{props.registrationFormData.UnderEighteen.field}</label>
                        <input type={props.registrationFormData.UnderEighteen.type}
                               placeholder={props.registrationFormData.UnderEighteen.placeholder}
                               onChange={() => props.onAgeChange(props.newAgeElement.current.value)}
                               onFocus={() => props.onTabIndexChange(1)}
                               ref={props.newAgeElement}
                               checked={props.underEighteen}
                               id={style.registrationCheckbox}/>
                    </div>
                    <div className={style.registerBlock}>
                        <label>{props.registrationFormData.AcceptAgreement.field}</label>
                        <input type={props.registrationFormData.AcceptAgreement.type}
                               placeholder={props.registrationFormData.AcceptAgreement.placeholder}
                               onChange={() => props.onAcceptChange(props.newAcceptElement.current.value)}
                               onFocus={() => props.onTabIndexChange(2)}
                               ref={props.newAcceptElement}
                               checked={props.acceptAgreement}
                        id={style.registrationCheckbox}/>
                    </div>
                    <button type='submit' id={style.registerButton}>Register</button>
                </div>
            </div>
        </form>
    )
}

export default RegistrationPage;