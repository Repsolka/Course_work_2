const LOGIN = 'LOGIN';
const UPDATE_ENTERED_PASSWORD = 'UPDATE-ENTERED-PASSWORD';
const UPDATE_ENTERED_LOGIN = 'UPDATE-ENTERED-LOGIN';
const SHOW_PASSWORD = 'SHOW_PASSWORD';
const HIDE_PASSWORD = 'HIDE_PASSWORD';

let initialState = {
    users: [
        {userId: 1, fullName: 'Andrew', password: '1234', login: '4321'}
    ],
    enteredPassword: '',
    enteredLogin: '',
    showPassword: false
}

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ENTERED_LOGIN:
            return {
                ...state,
                enteredLogin: action.enteredLogin
            }
        case UPDATE_ENTERED_PASSWORD:
            return {
                ...state,
                enteredPassword: action.enteredPassword
            }
        case SHOW_PASSWORD:
            return {
                ...state,
                showPassword: true
            }
        case HIDE_PASSWORD:
            return {
                ...state,
                showPassword: false
            }
        default:
            return state;
    }
}

export const loginAC = () => ({type: LOGIN});
export const updateEnteredPasswordAC = (text) => ({type: UPDATE_ENTERED_PASSWORD, enteredPassword: text});
export const updateEnteredLoginAC = (text) => ({type: UPDATE_ENTERED_LOGIN, enteredLogin: text});
export const showPasswordAC = () => ({type: SHOW_PASSWORD});
export const hidePasswordAC = () => ({type: HIDE_PASSWORD});

export default loginPageReducer;
