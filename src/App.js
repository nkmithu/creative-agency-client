import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './modules/Homepage/Home/Home';
import Login from './modules/LogInPage/Login';
import Dashboard from './modules/Dashboard/Dashboard';
import ClientOrder from './modules/Dashboard/Clients/ClientOrder/ClientOrder';
import ClientServiceList from './modules/Dashboard/Clients/ClientServiceList/ClientServiceList';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                   <Home/>
                </Route>
                <Route path="/login">
                   <Login/>
                </Route>
                <Route path="/dashboard">
                  <Dashboard/>
                </Route>
                <Route path="/clientOrder">
                  <ClientOrder/>
                </Route>
                <Route path="/clientServices">
                  <ClientServiceList/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;