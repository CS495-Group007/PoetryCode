import React, { Component } from "react";
import '../Styling/Login.css'

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="mb-3">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                
                <div class="d-grid gap-2">
                    <button type="submit" className="btn btn-dark btn-lg">Register</button>
                    <p className="forgot-password text-right">
                        Already registered? <a href="sign-in">Log in</a>
                    </p>
                </div>
            </form>
        );
    }
}