import {combineReducers, createStore} from "redux";
import loginPageReducer from "./loginPage-reducer";

let reducers = combineReducers({
    LoginPage: loginPageReducer
});

let store = createStore(reducers);

export default store;