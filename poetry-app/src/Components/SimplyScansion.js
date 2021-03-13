import React from 'react';
import PoemSelector from './PoemSelector.js';
import GameBoard from './GameBoard.js';
import '../Styling/SimplyScansion.css';
import Legend from './Legend.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var POEMS = {
    '1': {id: 1, 
          poet: 'Shakespeare', 
          name: 'Sonnet 29', 
          text: ['When, in disgrace with fortune and men’s eyes,','I all alone beweep my outcast state,','And trouble deaf heaven with my bootless cries,','And look upon myself and curse my fate,','Wishing me like to one more rich in hope,','Featured like him, like him with friends possessed,','Desiring this man’s art and that man’s scope,','With what I most enjoy contented least;','Yet in these thoughts myself almost despising,','Haply I think on thee, and then my state,','(Like to the lark at break of day arising','From sullen earth) sings hymns at heaven’s gate;','For thy sweet love remembered such wealth brings','That then I scorn to change my state with kings.'],
          colors: [["red", "blue", "red", "blue", "red"],["blue", "red", "blue", "red", "blue"],["red", "blue","red", "blue","red"]],
          lines: 3},    
    '2': {id: 2, 
          poet: 'Shakespeare', 
          name: 'Sonnet 30', 
          text: ['When to the sessions of sweet silent thought','I summon up remembrance of things past,','I sigh the lack of many a thing I sought,','And with old woes new wail my dear times waste:','Then can I drown an eye, unusd to flow,','For precious friends hid in deaths dateless night,','And weep afresh loves long since cancelld woe,','And moan th expense of many a vanishd sight;','Then can I grieve at grievances foregone,','And heavily from woe to woe tell oer','The sad account of fore-bemoaned moan,','Which I new pay as if not paid before.','But if the while I think on thee, dear friend,','All losses are restord, and sorrows end.'],
          lines: 12}
};

class SimplyScansion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            poems: POEMS,
            currentPoemNumber: 0,
            currentPoemName: '',
            currentPoemLines: 0,
            gameBoard: []
        };
        this.changePoem = this.changePoem.bind(this);
        this.updateGameBoard = this.updateGameBoard.bind(this);
        this.checkIfCorrect = this.checkIfCorrect.bind(this);
    }

    updateGameBoard(items, index){
        let gameBoard = this.state.gameBoard.slice();
        gameBoard[index] = items;
        this.setState({gameBoard: gameBoard});
    }

    checkIfCorrect(){
        let poemsAsArray = Object.keys(this.state.poems).map((pid) => this.state.poems[pid]);
        poemsAsArray.unshift("");
        let colorsKey = poemsAsArray[this.state.currentPoemNumber].colors;
        var i, j;
        for(i=0; i < colorsKey.length; i++){
            for(j=0; j < colorsKey[i].length; j++){
                if(this.state.gameBoard[i][j] != colorsKey[i][j]){
                alert("Incorrect");
                return;
                }
            }
        }
        alert("Correct!");
    }

    changePoem(poemID){
        let poemsAsArray = Object.keys(this.state.poems).map((pid) => this.state.poems[pid]);
        poemsAsArray.unshift("");
        let poemLines = poemsAsArray[poemID].lines;
        this.setState({currentPoemNumber: poemID, currentPoemLines: poemLines});
    }


    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs={0} md={9}></Col>
                        <Col><Legend/></Col>
                    </Row>
                </Container>
                <div className = "rowC">
                    <PoemSelector poems = {this.state.poems} changePoem = {this.changePoem} currentPoemNumber = {this.state.currentPoemNumber} currentPoemName = {this.currentPoemName}/>
                    <GameBoard currentPoemLines = {this.state.currentPoemLines} updateGameBoard = {this.updateGameBoard}/>
                </div>
                <div className = "button">
                    <button onClick = {this.checkIfCorrect}>Submit</button>
                </div>
            </div>
        );
    }
}

export default SimplyScansion;