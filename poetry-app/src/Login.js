import React, { Component } from "react";
import './Styling/Login.css';

export default class Login extends Component {
    render() {
        return (
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
                    <a class="btn btn-dark btn-lg" href="/simply-scansion" role="button">Sign in</a>
                    <p className="forgot-password text-right">
                        Forgot <a href="/sign-in">password?</a>
                    </p>
                    <p className="forgot-password text-right">
                        Don't have an <a href="/sign-up">account?</a>
                    </p>
                </div>
            </form>
        );
    }
}