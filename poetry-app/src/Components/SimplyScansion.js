import React from 'react';
import GameBoard from './GameBoard.js';
import Boxable from './Boxable.js';
import '../Styling/SimplyScansion.css';
import Legend from './Legend.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

/**
 * Componenent representing the GameBoard test page. Students interact with this component after they select a poem from the dashboard to complete. This component is responsible for checking the students answer against the answer key, and updating the database after a submit
 */

class SimplyScansion extends React.Component{
    /**
     * Sets up state variable gameBoard to be an empty array. Binds updateGameBoard and checkIfCorrect functions to this.
     * @constructor
     * @param props - contains poet, poemName, poemText, poemKey, and poemLines
     */
    constructor(props){
        super(props);
        this.state = {
            gameBoard: []
        };
        this.updateGameBoard = this.updateGameBoard.bind(this);
        this.checkIfCorrect = this.checkIfCorrect.bind(this);
        this.saveAnswer = this.saveAnswer.bind(this);
    }
    /**
     * Updates the state variable gameBoard to represent changes caused by the boxable and box components
     * @param {Object} items - represents an individual row of blocks
     * @param {number} index - represents the row in the gameBoard that needs updating
     */
    updateGameBoard(items, index){
        let gameBoard = this.state.gameBoard.slice();
        gameBoard[index] = items;
        this.setState({gameBoard: gameBoard});
    }
    /**
     * Checks the students answer to a poem against the answer key. Alerts correct if the answer matches up and Incorrect otherwise
     */
    checkIfCorrect(){
        let colorsKey = this.props.location.state.key;
        var i, j;
        for(i=0; i < colorsKey.length; i++){
            if(this.state.gameBoard[i] == null || colorsKey[i] == null || colorsKey[i].length != this.state.gameBoard[i].length){
                alert("Incorrect");
                return;
            }
            for(j=0; j < colorsKey[i].length; j++){
                if(this.state.gameBoard[i][j] != colorsKey[i][j]){
                alert("Incorrect");
                return;
                }
            }
        }
        alert("Correct!");
    }

    /**
     * converts an array to a string with the string |~| separating different elements of the array. Serves as an encoder to prepare writes to the DB.
     * @param {Array} array - represents the Array that is being encoded. Usually either an array of peomLines or an array representing a row of the gameBoard
     * @return {string} The encoded string.
     */
    convertArrayToString(array){
        let returnString = "";
        if(array == null)
            return returnString;
        var i;
        for(i = 0; i < array.length - 1; i++){
            returnString += array[i] + "|~|";
        }
        returnString += array[array.length - 1];
        return returnString;
    }

    /**
     * converts the 2D gameBoard to a string. Serves as an encoder before a write to the DB.
     * @param {Array} array - represents the gameBoard array containing the answer key for a poem.
     * @return {string} The encoded string.
     */
    convertGameBoardToString(array){
        let returnString = "";
        if(array == null)
            return returnString;
        var i;
        for(i = 0; i < array.length - 1; i++){
            returnString += this.convertArrayToString(array[i]) + "|*|";
        }
        returnString += this.convertArrayToString(array[array.length - 1]);
        return returnString;
    }

    saveAnswer(){
        alert(this.convertGameBoardToString(this.state.gameBoard));
    }

    /**
     * Renders the Poem Name, Poem Lines, GameBoard, Game Pieces (Boxables), Legend, and Submit button
     */
    render(){
        let poemLines = [];
        this.props.location.state.poemText.forEach((line) => {
            poemLines.push(<div className = "poem">{line}</div>);
        });
        return(
            <div class="parent">
                <div class="child">
                    <Container>
                        <Row>
                            <Col lg={3}></Col>
                            <Col lg={3}></Col>
                            <Col lg={3}></Col>
                            <Col><Legend/></Col>
                        </Row><br/>
                        <Row className="text-center">
                            <Col>
                                <h1>{this.props.location.state.poemName}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} lg={5} xl={5}>{poemLines}</Col>
                            <Col sm={6} lg={7} xl={7}>
                                <GameBoard 
                                    currentPoemLines = {this.props.location.state.currentPoemLines} 
                                    updateGameBoard = {this.updateGameBoard} 
                                    blockLimit = {5}
                                />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Button variant="secondary" onClick = {this.saveAnswer}>Save</Button>
                                <a>  </a>
                                <Button variant="secondary" onClick = {this.checkIfCorrect}>Submit</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="pieces">
                    <Boxable targetKey="box" label="' -" color="yellow"/>
                    <Boxable targetKey="box" label="- '" color="purple"/>
                    <Boxable targetKey="box" label="' - -" color="blue"/>
                    <Boxable targetKey="box" label="- - '" color="green"/>
                    <Boxable targetKey="box" label="' '" color="gray"/>
                    <Boxable targetKey="box" label="- -" color="black"/>
                </div>
            </div>
        );
    }
}

export default SimplyScansion;