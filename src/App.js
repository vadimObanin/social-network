import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile/>}/>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                    <Route path="/news" render={() => <Profile/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
