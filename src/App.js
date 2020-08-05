import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import { logo } from '../src/asset/pict/asset'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../src/Component/Home/Login'
import Register from '../src/Component/Home/Register'
import Home from './Pages/Home/Home.jsx';
import { Profile } from './Pages/Profile/Profile';
import { DetailTrip } from './Pages/DetailTrip/DetailTrip';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="transparent" expand="lg">
          <Navbar.Brand href="#home" className="ml-5">
            <Link to="/">
              <img className="logo" src={logo} alt="dewe tour" />
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end ml-auto">
            <Login />
            <Register />
            <Link to="/DetailTrip">Detail Trip</Link>
          </Nav>
        </Navbar>


        <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/DetailTrip">
            <DetailTrip />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
