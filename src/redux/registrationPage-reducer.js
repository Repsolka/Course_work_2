const UPDATE_PASSWORD = 'UPDATE-PASSWORD';
const UPDATE_ENTERED_EMAIL = 'UPDATE-ENTERED-EMAIL';
const UPDATE_ENTERED_NAME = 'UPDATE-ENTERED-NAME';
const UPDATE_AGE = 'UPDATE-AGE';
const SHOW_PASSWORD = 'SHOW_PASSWORD';
const HIDE_PASSWORD = 'HIDE_PASSWORD';
const UPDATE_TABINDEX = 'UPDATE_TABINDEX';
const UPDATE_ACCEPT = 'UPDATE_ACCEPT';

let initialState = {
    registrationFormData: {
        Email: {
            field: 'Email',
            type: 'text',
            placeholder: 'Enter your email'
        },
        Password: {
            field: 'Password',
            type: 'password',
            placeholder: 'Enter your password'
        },
        Name: {
            field: 'Name',
            type: 'text',
            placeholder: 'Enter your name'
        },
        UnderEighteen: {
            field: 'Under 18',
            type: 'checkbox',
            placeholder: 'Check'
        },
        AcceptAgreement: {
            field: 'I accept the user agreement',
            type: 'checkbox',
            placeholder: 'Check'
        }

    },
    enteredPassword: '',
    enteredEmail: '',
    enteredName: '',
    underEighteen: false,
    acceptAgreement: false,
    showingPassword: false,
    tabIndex: 0

}
const registrationPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PASSWORD:
            return {
                ...state,
                enteredPassword: action.enteredPassword
            }
        case UPDATE_ENTERED_EMAIL:
            return {
                ...state,
                enteredEmail: action.enteredEmail,
            }
        case UPDATE_ENTERED_NAME:
            return {
                ...state,
                enteredName: action.enteredName
            }
        case UPDATE_AGE:
            return {
                ...state,
                underEighteen: action.underEighteen
            }
        case UPDATE_ACCEPT:
            return {
                ...state,
                acceptAgreement: action.accept
            }
        case SHOW_PASSWORD:
            return {
                ...state,
                showingPassword: true,
            }
        case HIDE_PASSWORD:
            return {
                ...state,
                showingPassword: false,
            }
        case UPDATE_TABINDEX:
            return{
                ...state,
                tabIndex: action.num,
            }
        default:
            return state;
    }
}

export const updatePassword = (text) => ({type: UPDATE_PASSWORD, enteredPassword: text});
export const updateEnteredEmail = (text) => ({type: UPDATE_ENTERED_EMAIL, enteredEmail: text});
export const updateEnteredName = (text) => ({type: UPDATE_ENTERED_NAME, enteredName: text});
export const updateAge = (value) => ({type: UPDATE_AGE, underEighteen: value});
export const updateAccept = (value) => ({type: UPDATE_ACCEPT, accept: value});
export const showPassword = () => ({type: SHOW_PASSWORD});
export const hidePassword = () => ({type: HIDE_PASSWORD});
export const updateTabIndex = (num) => ({type: UPDATE_TABINDEX, num});

export default registrationPageReducer;