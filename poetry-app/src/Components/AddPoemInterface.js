/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React from 'react';
import GameBoard from './GameBoard.js';
import Boxable from './Boxable.js';
import '../Styling/GamePage.css'
import Legend from './Legend.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Adding a poem is going to look similar to how a student would scan a poem, BUT this is more of a blank canvas


class AddPoemInterface extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lines: [],
            numLines: 0,
            poemName: "",
            poet: "",
            gameBoard: []
        };
        this.processLines = this.processLines.bind(this);
        this.textChange = this.textChange.bind(this);
        this.updateGameBoard = this.updateGameBoard.bind(this);
        this.handlePoetChange = this.handlePoetChange.bind(this);
        this.handlePoemNameChange = this.handlePoemNameChange.bind(this);
    }

    convertArrayToString(array){
        let returnString = "";
        var i;
        for(i = 0; i < array.length - 1; i++){
            returnString += array[i] + "|~|";
        }
        returnString += array[array.length - 1];
        return returnString;
    }

    convertGameBoardToString(array){
        let returnString = "";
        var i;
        for(i = 0; i < array.length - 1; i++){
            returnString += this.convertArrayToString(array[i]) + "|*|";
        }
        returnString += this.convertArrayToString(array[array.length - 1]);
        return returnString;
    }

    processLines(event){
        event.preventDefault();
        alert(this.state.poet);
        alert(this.state.poemName);
        alert(this.convertArrayToString(this.state.lines));
        alert(this.convertGameBoardToString(this.state.gameBoard));
        //SEND DATA TO DATABASE HERE
    }

    textChange(event) {
        var ls = event.target.value.split('\n');
        var i;
        let numOfLines = 0;
        for(i=0; i<ls.length; i++){
            if(ls[i].length > 0)
                numOfLines++;
        }
        this.setState({
            lines: ls,
            numLines: numOfLines
        });
        console.log(this.state.numLines);
    }

    handlePoetChange(event){
        this.setState({poet: event.target.value});
    }

    handlePoemNameChange(event){
        this.setState({poemName: event.target.value});
    }
 
    updateGameBoard(items, index){
        let gameBoard = this.state.gameBoard.slice();
        gameBoard[index] = items;
        this.setState({gameBoard: gameBoard});
    }
    
    render(){
        return(
            <div className = "parent">
                <div className = "child">
                    <div id="gameInner" itemID="gameInner">
                        <Container>
                            <form onSubmit={this.processLines}>
                                <Row>
                                    <Col>
                                        <label>
                                            Poet:
                                            <br/>
                                            <input type="text" value = {this.state.poet} onChange = {this.handlePoetChange} />
                                        </label><br/>
                                    </Col>
                                    <Col>
                                        <label>
                                            Poem Name:
                                            <br/>
                                            <input type="text" value = {this.state.poemName} onChange = {this.handlePoemNameChange} />
                                        </label><br/>
                                    </Col>
                                    <Col xl={2}><Legend/></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>
                                            Poem Text:
                                            <br/>
                                            <textarea className="poemInput" id="thePoemText" onChange={this.textChange}/>
                                        </label><br/>
                                    </Col>
                                    <Col>
                                        <GameBoard currentPoemLines = {this.state.numLines} updateGameBoard = {this.updateGameBoard}/>
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col><Button variant="secondary" type="submit">Submit</Button></Col>
                                </Row>
                            </form>
                        </Container>
                    </div>
                </div>
                <div class = "pieces">
                    <Boxable targetKey="box" label="' -" color="yellow"/>
                    <Boxable targetKey="box" label="- '" color="blue"/>
                    <Boxable targetKey="box" label="' - -" color="red"/>
                    <Boxable targetKey="box" label="- - '" color="gray"/>
                    <Boxable targetKey="box" label="' '" color="black"/>
                    <Boxable targetKey="box" label="- -" color="green"/>
                </div>
            </div>
        );
    }
}

export default AddPoemInterface;