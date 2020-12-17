const LOGIN = 'LOGIN';
const UPDATE_ENTERED_PASSWORD = 'UPDATE-ENTERED-PASSWORD';
const UPDATE_ENTERED_LOGIN = 'UPDATE-ENTERED-LOGIN';
const SHOW_PASSWORD = 'SHOW_PASSWORD';
const HIDE_PASSWORD = 'HIDE_PASSWORD';
const REMOVE_ENTERED_PASSWORD = 'REMOVE_ENTERED_PASSWORD';

let initialState = {
    users: [
        {userId: 1, fullName: 'Andrew', password: '1234', login: '4321'}
    ],
    enteredPassword: '',
    enteredLogin: '',
    showingPassword: false,
    selectionStart: 0,
    numOfPasswordItems: 0,
    numOfLoginItems: 0
}

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ENTERED_LOGIN:
            return {
                ...state,
                enteredLogin: action.enteredLogin,
            }
        case UPDATE_ENTERED_PASSWORD:
            return {
                ...state,
                enteredPassword: action.enteredPassword,
                selectionStart: action.position,
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
        case REMOVE_ENTERED_PASSWORD:
            return{
                ...state,
                enteredPassword: ''
            }
        default:
            return state;
    }
}

export const login = () => ({type: LOGIN});
export const updateEnteredPassword = (text, position) => ({type: UPDATE_ENTERED_PASSWORD, enteredPassword: text, position});
export const updateEnteredLogin = (text) => ({type: UPDATE_ENTERED_LOGIN, enteredLogin: text});
export const showPassword = () => ({type: SHOW_PASSWORD});
export const hidePassword = () => ({type: HIDE_PASSWORD});
export const removeEnteredPassword = () => ({type: REMOVE_ENTERED_PASSWORD});

export default loginPageReducer;
