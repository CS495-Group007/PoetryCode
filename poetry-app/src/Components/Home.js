/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../Styling/Login.css';
import icon from '../Images/nounproject.png';
import Image from 'react-bootstrap/Image';

/**
 * Component in charge of rendering the Home Page
 */
class Home extends Component {
     /**
      * Function to render the component.
      */
    render() {
        return (
            <div className = "outer">
                <div className = "inner">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={icon} alt="Noun project icon" className="center"/>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <h3>SyllaBits</h3>
                                <p>With building blocks to practice and refine, your scansion skills will grow with every line.</p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Button variant="secondary" href='/sign-in'>Log In</Button>{' '}
                                <Button variant="secondary" href='/sign-up'>Sign Up</Button>{' '}
                                <Button variant="secondary" href='/student-dashboard'>Guest</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;