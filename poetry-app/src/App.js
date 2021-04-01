import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Styling/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

//Import the components to set up the navigation bar
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import SimplyScansion from "./Components/SimplyScansion";
import AddPoemInterface from "./Components/AddPoemInterface";
import Home from "./Components/Home";
import HowTo from "./Components/HowTo";
import Credits from "./Components/Credits"
import StudentDashboard from "./Components/Dashboards/StudentDashboard";
import InstructorDashboard from "./Components/Dashboards/InstructorDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        {/*Navigation Bar*/}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Syllabits</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/sign-in">Log In</Nav.Link>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
              <Nav.Link href="/how-to">How To</Nav.Link>
              <Nav.Link href="/student-dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/add-poem">Add a Poem</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/credits">Credits</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/*Setting up navigation routes*/}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path='/simply-scansion' component={SimplyScansion} />
          <Route path='/student-dashboard' component={StudentDashboard} />
          <Route path='/instructor-dashboard' component={InstructorDashboard} />
          <Route path='/add-poem' component={AddPoemInterface} />
          <Route path='/how-to' component={HowTo} />
          <Route path='/credits' component={Credits} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
