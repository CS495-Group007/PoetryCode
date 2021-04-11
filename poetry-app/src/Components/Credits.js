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
class Credit extends Component {
    componentDidMount() {
        const apiUrl = 'https://syllabits.betatesting.as.ua.edu/api/account/register.php';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));
  }

    render() {
        return (
            <div className = "outer">
                <div className = "inner">
                    <p className="text-center">Put content here.</p>
                </div>
            </div>
        );
    }
}

export default Credit;