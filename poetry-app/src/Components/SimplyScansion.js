import React from 'react';
import PoemSelector from './PoemSelector.js';
import GameBoard from './GameBoard.js';
import Boxable from './Boxable.js';
import '../Styling/SimplyScansion.css';
import Legend from './Legend.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SimplyScansion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gameBoard: []
        };
        this.updateGameBoard = this.updateGameBoard.bind(this);
        this.checkIfCorrect = this.checkIfCorrect.bind(this);
    }

    updateGameBoard(items, index){
        let gameBoard = this.state.gameBoard.slice();
        gameBoard[index] = items;
        this.setState({gameBoard: gameBoard});
    }

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

    render(){
        let poemLines = [];
        this.props.location.state.poemText.forEach((line) => {
            poemLines.push(<div className = "poem">{line}</div>);
        });
        return(
            <div class="parent">
                <div class="child">
                    <Container>
                        <Row className="text-center">
                            <Col md={8} lg={9}>
                                <h1 class="text-class">{this.props.location.state.poemName}</h1>
                            </Col>
                            <Col><Legend/></Col>
                        </Row>
                        <Row>
                            <Col sm={6} lg={5} xl={5}>{poemLines}</Col>
                            <Col sm={6} lg={7} xl={7}><GameBoard 
                                currentPoemLines = {this.props.location.state.currentPoemLines} 
                                updateGameBoard = {this.updateGameBoard} 
                            /></Col>
                        </Row>
                        <Row className="text-center">
                            <Button variant="secondary" onClick = {this.checkIfCorrect}>Submit</Button>
                        </Row>
                    </Container>
                </div>
                <div class="pieces">
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

export default SimplyScansion;