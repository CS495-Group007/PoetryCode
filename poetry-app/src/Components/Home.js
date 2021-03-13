//This is the Home page, giving information on Scansion & how to play
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import '../Styling/Login.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                {/*Row/Col containers to organize the different sections*/}
                <Row>
                    <Col>
                        {/*The title & info section */}
                        <figure class="text-center">
                            <h1>Simply Scansion</h1>
                            <h3>What is Scansion?</h3>
                            <blockquote class ="blockquote">
                                <p>"the action of scanning a line of verse to determine its rhythm"</p>
                            </blockquote>
                        </figure>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        {/*Navigation section */}
                        <ButtonGroup vertical size="lg" className="mb-2">
                            <Button variant="dark" href='/sign-in'>Sign In</Button>
                            <Button variant="dark" href='/sign-up'>Sign Up</Button>
                            <Button variant="dark" href='/simply-scansion'>Proceed as Guest</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*How to Play section */}
                        <h3><a id="/how-to">How To Play?</a></h3>
                        <ol>
                            <li>Sign In or Proceed as Guest</li>
                            <li>Select the poem you want to scan</li>
                            <li>The gameboard will populate with the number of lines in the poem selected</li>
                            <li>Use the game pieces at the bottom of the page to assign the five sets of syllables to each line</li>
                            <li>Once completed, hit submit to check your work!</li>
                        </ol>
                        <p>You can complete the poems as many times as necessary to learn the skill of scansion!</p>
                        <h4 class="text-center">What Do All the Colors Mean?</h4>
                        <ul>
                            <li>Yellow - Iamb</li>
                            <li>Blue - Trochee</li>
                            <li>Red - Dactyl</li>
                            <li>Grey - Anapest</li>
                            <li>Black - Spondee</li>
                            <li>Green - Pyrrhic</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}