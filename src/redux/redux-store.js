import {combineReducers, createStore} from "redux";
import loginPageReducer from "./loginPage-reducer";
import registrationPageReducer from "./registrationPage-reducer";

let reducers = combineReducers({
    LoginPage: loginPageReducer,
    RegistrationPage: registrationPageReducer
});

let store = createStore(reducers);
export default store;




