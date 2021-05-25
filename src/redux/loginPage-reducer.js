const UPDATE_ENTERED_PASSWORD = 'UPDATE-ENTERED-PASSWORD';
const UPDATE_ENTERED_LOGIN = 'UPDATE-ENTERED-LOGIN';
const SHOW_PASSWORD = 'SHOW_PASSWORD';
const HIDE_PASSWORD = 'HIDE_PASSWORD';
const REMOVE_ENTERED_PASSWORD = 'REMOVE_ENTERED_PASSWORD';
const UPDATE_SELECTION_START = 'UPDATE_SELECTION_START';
const UPDATE_TABINDEX = 'UPDATE_TABINDEX'

let initialState = {
    LoginData: {
        passwordData: {
            field: 'Password',
            enteredPassword: 'fsdaf',
            showingPassword: false,
            numOfPasswordItems: 0,
            placeholder: 'Enter your password'
        },
        loginData: {
            field: 'Login',
            enteredLogin: '',
            numOfLoginItems: 0,
            placeholder: 'Enter your login'
        }
    },
    selectionStart: 0,
    tabIndex: 0
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
                enteredPassword: action.text,
            }
        case UPDATE_SELECTION_START:
            return{
                ...state,
                selectionStart: action.count,
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

export const updateEnteredPassword = (text, position) => ({type: UPDATE_ENTERED_PASSWORD, enteredPassword: text, position});
export const updateEnteredLogin = (text) => ({type: UPDATE_ENTERED_LOGIN, enteredLogin: text});
export const showPassword = () => ({type: SHOW_PASSWORD});
export const hidePassword = () => ({type: HIDE_PASSWORD});
export const removeEnteredPassword = (text) => ({type: REMOVE_ENTERED_PASSWORD, text});
export const updateSelectionStart = (count) => ({type: UPDATE_SELECTION_START, count});
export const updateTabIndex = (num) => ({type: UPDATE_TABINDEX, num});

export default loginPageReducer;
