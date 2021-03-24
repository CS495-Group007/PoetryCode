/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React, { Component } from "react";
import '../Styling/Login.css';

/**
 * Component responsible for implementing the log in functionality.
 */
class Login extends Component {
    /**
     * Function to render the component. Renders the area to submit login information
     */
    render() {
        return (
            <div className = "outer">
                <div className = "inner">
                    <form>
                        <h3>Log In</h3>

                        <div className="mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                            <a class="btn btn-dark btn-lg" href="/student-dashboard" role="button">Sign in</a>
                            <p className="forgot-password text-right">
                                Forgot <a href="/sign-in">password?</a>
                            </p>
                            <p className="forgot-password text-right">
                                Don't have an account?<a href="/sign-up"> Sign Up</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;