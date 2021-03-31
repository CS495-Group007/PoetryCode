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
            validated: false
        };
    }

    /**
     * Function to handle the submission of the registration form, checks the validity of the form.
     * @param {Event} event
     */

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({validated: true});
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
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="lastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="studentEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="example@email.com"
                                />
                                <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="instructorEmail">
                                <Form.Label>Instructor Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="instructor@email.com"
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="password"
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