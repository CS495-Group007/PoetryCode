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
          text: 'When, in disgrace with fortune and men’s eyes,\nI all alone beweep my outcast state,\nAnd trouble deaf heaven with my bootless cries,\nAnd look upon myself and curse my fate,\nWishing me like to one more rich in hope,\nFeatured like him, like him with friends possessed,\nDesiring this man’s art and that man’s scope,\nWith what I most enjoy contented least;\nYet in these thoughts myself almost despising,\nHaply I think on thee, and then my state,\n(Like to the lark at break of day arising\nFrom sullen earth) sings hymns at heaven’s gate;\nFor thy sweet love remembered such wealth brings\nThat then I scorn to change my state with kings.',
          colors: [["red", "blue", "red", "blue", "red"],["blue", "red", "blue", "red", "blue"],["red", "blue","red", "blue","red"]],
          lines: 3},    
    '2': {id: 2, 
          poet: 'Shakespeare', 
          name: 'Sonnet 30', 
          text: 'When to the sessions of sweet silent thought\nI summon up remembrance of things past,\nI sigh the lack of many a thing I sought,\nAnd with old woes new wail my dear times waste:\nThen can I drown an eye, unusd to flow,\nFor precious friends hid in deaths dateless night,\nAnd weep afresh loves long since cancelld woe,\nAnd moan th expense of many a vanishd sight;\nThen can I grieve at grievances foregone,\nAnd heavily from woe to woe tell oer\nThe sad account of fore-bemoaned moan,\nWhich I new pay as if not paid before.\nBut if the while I think on thee, dear friend,\nAll losses are restord, and sorrows end.',
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
                        <Col xs={9}></Col>
                        <Col><Legend/></Col>
                    </Row>
                </Container>
                <PoemSelector poems = {this.state.poems} changePoem = {this.changePoem} currentPoemNumber = {this.state.currentPoemNumber} currentPoemName = {this.currentPoemName}/>
                <GameBoard poems = {this.state.poems} currentPoemNumber = {this.state.currentPoemNumber} currentPoemLines = {this.state.currentPoemLines} updateGameBoard = {this.updateGameBoard}/>
                <button onClick = {this.checkIfCorrect}>Submit</button>
            </div>
        );
    }
}

export default SimplyScansion;