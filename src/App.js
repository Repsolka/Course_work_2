import './App.css';
import React from "react";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";
import store from "./redux/redux-store";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import RegistrationPageContainer from "./components/RegistrationPage/RegistrationPageContainer";
import Header from "./components/Header/Header";


function App(props) {
    return (
        <div className="App">
            <Router>
            <Header className="App-header"/>
            <Switch>
                <Route exact path='/'><LoginPageContainer store={store}/></Route>
                <Route exact path='/registration'><RegistrationPageContainer store={store}/></Route>
            </Switch>
            </Router>
        </div>
    );
}

export default App;
