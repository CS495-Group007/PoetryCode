import React from 'react';
import GameBoard from './GameBoard.js';
import Boxable from './Boxable.js';
import '../Styling/GamePage.css'
import Legend from './Legend.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var poetNames = ['Shakespeare', 'Frost', 'Edgar Allan Poe', 'Emily Dickinson', 'Other'];

/**
 * Component that implements the functionality to add a poem to the database. Includes setting the poem name, author, text, and key
 */
class AddPoemInterface extends React.Component{
    /**
     * Sets up the state by giving initial values to lines, numLines, poemName, poet, and gameBoard. Also binds the following functions to this: processPage, textChange, updateGameBoard, handlePoetChange, and handlePoemNameChange.
     * @constructor
     * @param props - Contain parent object information
     */
    constructor(props){
        super(props);
        this.state = {
            lines: [],
            numLines: 0,
            poemName: "",
            gameBoard: [],
            displayPoetInput: false,
            currentSelection: "Choose a Poet"
        };
        this.processPage = this.processPage.bind(this);
        this.textChange = this.textChange.bind(this);
        this.updateGameBoard = this.updateGameBoard.bind(this);
        this.handlePoemNameChange = this.handlePoemNameChange.bind(this);
        this.filterLines = this.filterLines.bind(this);
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

    filterLines(lines){
        var i,j;
        var returnLines = [];
        var leadingSpaces = true;
        
        if(lines == null) return returnLines;
        for(i = 0; i < lines.length; i++)
            if(lines[i].length > 0)
                returnLines.push(lines[i].replace(/^\s+|\s+$/g, ''));
        return returnLines;
    }

    /**
     * Function called when the instructor clicks the submit button on the interface. Will send relevant information to the DB.
     * @param event
     */
    processPage(event){
        event.preventDefault();
        alert(this.state.poemName);
        alert(this.convertArrayToString(this.filterLines(this.state.lines)));
        alert(this.convertGameBoardToString(this.state.gameBoard));
        //SEND DATA TO DATABASE HERE
    }

    /**
     * Function called when the instructor types in the poemLines text box. Separates the lines by \n. Updates the lines array and the number of lines.
     * @param event - contains the value of the poemLines text box.
     */
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
    }
   
    /**
     * Function to update the value of the poem name.
     * @param event - contains the value representing the current string in the poem name text box.
     */
    handlePoemNameChange(event){
        this.setState({poemName: event.target.value});
    }
 
    /**
     * Updates the state variable gameBoard to represent changes caused by the boxable and box components.
     * @param {Object} items - represents an individual row of blocks.
     * @param {number} index - represents the row in the gameBoard that needs updating.
     */
    updateGameBoard(items, index){
        let gameBoard = this.state.gameBoard.slice();
        gameBoard[index] = items;
        this.setState({gameBoard: gameBoard});
    }
    
    /**
     * Function to render the component. Renders the area to submit poet, poem name, poem text, and gameboard key. Also renders the 6 necessary Boxables
     */
    render(){
        /*const defaultOption = poetNames[0];
        let poetInput = [];
        poetInput.push(
            <DropdownButton alignRight title={this.state.currentSelection} id="dropdown-menu-align-right" variant="secondary" onSelect={this.handlePoetChange}>
              {this.generatePoetNameButtons()}
            </DropdownButton>
        );
        if(this.state.displayPoetInput === true)
            poetInput.push(<input type="text" value = {this.state.poet} onChange = {this.handlePoetTextChange} />);*/
        return(
            <div className = "parent">
                <div className = "child">
                    <div id="gameInner" itemID="gameInner">
                        <Container>
                            <form onSubmit={this.processPage}>
                                <Row>
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
                                        <GameBoard 
                                            currentPoemLines = {this.state.numLines} 
                                            updateGameBoard = {this.updateGameBoard}
                                            blockLimit = {5}
                                        />
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