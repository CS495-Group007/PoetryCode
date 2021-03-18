import React from 'react';
import PoemSelector from './PoemSelector.js';
import GameBoard from './GameBoard.js';
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
            <div>
                <Container>
                    <Row className="text-center">
                        <Col md={8} lg={9} xl={10}><h1 class="text-center">{this.props.location.state.poemName}</h1></Col>
                        <Col><Legend/></Col>
                    </Row>
                    <Row>
                        <Col md={6} lg={6} xl={5}>{poemLines}</Col>
                        <Col md={5} lg={5} xl={7}><GameBoard 
                            currentPoemLines = {this.props.location.state.currentPoemLines} 
                            updateGameBoard = {this.updateGameBoard} 
                        />
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col><Button variant="secondary" onClick = {this.checkIfCorrect}>Submit</Button></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SimplyScansion;