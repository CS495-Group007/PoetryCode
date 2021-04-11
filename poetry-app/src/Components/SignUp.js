/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React, { Component } from "react";
import '../Styling/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


/**
 * Component responsible for implementing the sign up functionality.
 */

class SignUp extends Component {
    
    /**
     * Sets the initial state for validated.
     * @constructor
     */
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            firstName: "",
            lastName: "",
            studentEmail: "",
            instructorEmail: "",
            password: ""
        };
    }

    /**
     * Function to handle the submission of the registration form, checks the validity of the form.
     * @param {Event} event
     */

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if(form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({validated: true})
        const url = 'https://syllabits.betatesting.as.ua.edu/api/account/register.php'
        var data = JSON.stringify({
            "firstname" : this.state.firstName,
            "lastname" : this.state.lastName,
            "email" : this.state.studentEmail,
            "instructoremail" : this.state.instructorEmail,
            "password" : this.state.password});
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    /**
     * Renders the area to submit registration information
     */
    render() {
        return (
            <div className = "outer">
                <div className = "inner">
                    <h3>Register</h3>
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="firstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    name="firstName"
                                    type="text"
                                    placeholder="First name"
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="lastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    name="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="studentEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    name="studentEmail"
                                    type="email"
                                    placeholder="example@email.com"
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="instructorEmail">
                                <Form.Label>Instructor Email</Form.Label>
                                <Form.Control
                                    name="instructorEmail"
                                    type="email"
                                    placeholder="instructor@email.com"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    name="password"
                                    type="text"
                                    placeholder="password"
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>                        
                        <Button variant="secondary" type="submit">Submit</Button>
                        <p className="forgot-password text-right">
                            Already registered? <a href="sign-in">Log in</a>
                        </p>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SignUp;