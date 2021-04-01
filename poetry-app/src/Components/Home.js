/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../Styling/Login.css';

/**
 * Component in charge of rendering the Home/How-To page.
 */
class Home extends Component {
     /**
      * Function to render the component. Renders the area that includes information about the website.
      */
    render() {
        return (
            <div className = "outer">
                <div className = "inner">
                    <Container>
                        <Row>
                            <Col>
                                <figure class="text-center">
                                    <h1>Syllabits</h1>
                                    <h3>What is Scansion?</h3>
                                    <blockquote class ="blockquote">
                                        <p>"the action of scanning a line of verse to determine its rhythm"</p>
                                    </blockquote>
                                </figure>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <ButtonGroup vertical size="lg" className="mb-2">
                                    <Button variant="dark" href='/sign-in'>Sign In</Button>
                                    <Button variant="dark" href='/sign-up'>Sign Up</Button>
                                    <Button variant="dark" href='/how-to'>Proceed as Guest</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;