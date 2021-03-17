import React from 'react';
import PoemSelector from './PoemSelector.js';
import GameBoard from './GameBoard.js';
import '../Styling/SimplyScansion.css';
import Legend from './Legend.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                    <Row>
                        <Col xs={0} md={9}></Col>
                        <Col><Legend/></Col>
                    </Row>
                </Container>
                <h1 class="text-center">{this.props.location.state.poemName}</h1>
                <div>
                    {poemLines}
                    <GameBoard 
                        currentPoemLines = {this.props.location.state.currentPoemLines} 
                        updateGameBoard = {this.updateGameBoard} 
                    />
                </div>
                <div className = "button">
                    <button onClick = {this.checkIfCorrect}>Submit</button>
                </div>
            </div>
        );
    }
}

export default SimplyScansion;