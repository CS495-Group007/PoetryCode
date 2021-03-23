/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Styling/Login.css';

export default class Home extends Component {
     /**
     * Function to render the component. Renders the area that includes information about the how to play the game.
     */
    render() {
        return (
            <div className = "outer">
                <div className = "inner">
                    <Container>
                        <Row>
                            <Col>
                                <h3><a id="/how-to">How To Play?</a></h3>
                                <ol>
                                    <li>Sign In or Proceed as Guest</li>
                                    <li>Select the poem you want to scan</li>
                                    <li>The gameboard will populate with the number of lines in the poem selected</li>
                                    <li>Use the game pieces at the bottom of the page to assign the five sets of syllables to each line</li>
                                    <li>If you need to delete any of the pieces, click the trash can item next to the line you need to redo and it'll clear the whole line</li>
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
                </div>
            </div>
        );
    }
}