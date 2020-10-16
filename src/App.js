import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './modules/Homepage/Home/Home';
import Login from './modules/LogInPage/Login';
import Dashboard from './modules/Dashboard/Dashboard';
import ClientOrder from './modules/Dashboard/Clients/ClientOrder/ClientOrder';
import ClientServiceList from './modules/Dashboard/Clients/ClientServiceList/ClientServiceList';
import AdminServiceList from './modules/Dashboard/Admin/AdminServiceList/AdminServiceList';
import ClientReview from './modules/Dashboard/Clients/ClientReview/ClientReview';
import AdminAddService from './modules/Dashboard/Admin/AdminAddService/AdminAddService';
import AdminCreate from './modules/Dashboard/Admin/AdminCreate/AdminCreate';
import { createContext } from 'react';
import PrivateRoute from './modules/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
    return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
            <Switch>
                <Route exact path="/">
                   <Home/>
                </Route>
                <Route path="/login">
                   <Login/>
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard/>
                </PrivateRoute>
                <PrivateRoute path="/clientOrder">
                  <ClientOrder/>
                </PrivateRoute>
                <PrivateRoute path="/clientServices">
                  <ClientServiceList/>
                </PrivateRoute>
                <PrivateRoute path="/clientReview">
                  <ClientReview/>
                </PrivateRoute>
                <PrivateRoute path="/admin">
                  <AdminServiceList/>
                </PrivateRoute>
                <PrivateRoute path="/adminAddService">
                  <AdminAddService/>
                </PrivateRoute>
                <PrivateRoute path="/adminCreate">
                  <AdminCreate/>
                </PrivateRoute>
            </Switch>
        </Router>
        </UserContext.Provider>
    )
}

export default App;