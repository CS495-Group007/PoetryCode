/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React, { Component } from "react";
import '../Styling/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

/**
 * Component responsible for implementing the log in functionality.
 */
class Login extends Component {

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
     * Function to handle the submission of the login form, checks the validity of the form.
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
     * Renders the area to submit login information
     */
    render() {
        return (
            <div className = "outer">
                <div className = "inner">
                    <h3>Log In</h3>
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter email"
                                />
                                <Form.Control.Feedback type="invalid">Please provide the email address associated with your account.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter password"
                                />
                                <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="rememberMe">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="secondary" type="submit">Sign In</Button>
                    </Form>
                    <p className="forgot-password text-right">
                        Forgot <a href="/sign-in">password?</a>
                    </p>
                    <p className="forgot-password text-right">
                        Don't have an account?<a href="/sign-up"> Sign Up</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Login;