import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './SimplyScansion.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap"

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import SimplyScansion from "./SimplyScansion";

function App() {
  return (<Router>
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/sign-in">Simply Scansion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/sign-in">Log In</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link href="/simply-scansion">Scan a Poem</Nav.Link>
            <Nav.Link href="#">Add a Poem</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path='/simply-scansion' component={SimplyScansion} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;