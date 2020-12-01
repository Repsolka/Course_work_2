import './App.css';
import React from "react";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";
import store from "./redux/redux-store";

function App(props) {
    return (
        <div className="App">
            <LoginPageContainer store={store}/>
        </div>
    );
}

export default App;
