import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import { logo } from '../src/asset/pict/asset'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from '../src/Component/Home/Login'
import Register from '../src/Component/Home/Register'
import Home from './Pages/Home/Home.jsx';
import { Profile } from './Pages/Profile/Profile';
import DetailTrip from './Pages/DetailTrip/DetailTrip';
import { Dropdown } from './Component/Home/Dropdown';
import { Payment } from './Pages/Payment/Payment';
import Footer from './Component/Footer';
import Transactions from './Pages/Admin/Transactions'
import IncomingTrip from './Pages/Admin/IncomingTrip/IncomingTrip';
import Add from './Pages/Admin/Add/Add';




function App() {
  const [auth, setAuth] = useState(true)
  const [role] = useState(1)

  const handleAuth = () => {
    setAuth(true)
  }

  return (
    <div className="Apps">
      <Router>
        <div className="hero-image">
          <Navbar bg="transparent" expand="sm md">
            <Navbar.Brand className="ml-5">
              <Link to="/">
                <img className="logo" src={logo} alt="dewe tour" />
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end mr-5">
              {auth
                ? <Dropdown className="mr-5" role={role} />
                :
                <>
                  <Login setAuth={handleAuth} />
                  <Register />
                </>
              }
            </Nav>
          </Navbar>
        </div>

        <Switch>

          {
            role === 1 ?
              <Route exact path="/" component={Transactions} />
              :
              <Route exact path="/" component={Home} />
          }
          <Route path="/Add" component={Add} />
          <Route path="/IncomingTrip" component={IncomingTrip} />
          <Route path="/DetailTrip" component={DetailTrip} />
          <Route path="/Transactions" component={Transactions} />
          <Route path="/Payment" auth={auth} component={Payment} />
          <PrivateRoute exact path="/Profile" component={Profile} auth={auth} />


        </Switch>
      </Router>
      <Footer />
    </div>
  );
}



//private route
const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        props => auth ?
          (<Component{...props} />) :
          (<Redirect to={{ pathname: '/' }} />)
      }
    />
  )
}
export default App;


