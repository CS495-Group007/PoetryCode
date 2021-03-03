import React from 'react';
import Boxable from './Boxable';
import Box from './Box';
import '../Styling/GameBoard.css';


export default class GameBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameBoard: []
    };
    this.checkIfCorrect = this.checkIfCorrect.bind(this);
    this.updateGameBoard = this.updateGameBoard.bind(this);
  }

  updateGameBoard(items, index){
    let gameBoard = this.state.gameBoard.slice();
    gameBoard[index] = items;
    this.setState({gameBoard: gameBoard});
  }

  checkIfCorrect(){
    let poemsAsArray = Object.keys(this.props.poems).map((pid) => this.props.poems[pid]);
    poemsAsArray.unshift("");
    let colorsKey = poemsAsArray[this.props.currentPoemNumber].colors;
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
  
  render() {
    var i;
    let boxes = [];
    for(i=0; i < this.props.currentPoemLines; i++){
      boxes.push(<Box targetKey="box" index={i} updateGameBoard={this.updateGameBoard}/>);
    }
    return (
      <div>
        <div className="drag_things_to_boxes">
          <div className="boxes">
            {boxes}
          </div>
          <div style={{clear: 'both'}}>&nbsp;</div>
          <div className="things_to_drag">
            <Boxable targetKey="box" label="' -" color="yellow"/>
            <Boxable targetKey="box" label="- '" color="blue"/>
            <Boxable targetKey="box" label="' - -" color="red"/>
            <Boxable targetKey="box" label="- - '" color="gray"/>
            <Boxable targetKey="box" label="' '" color="black"/>
            <Boxable targetKey="box" label="- -" color="green"/>
          </div>
        </div>
        <button onClick = {this.checkIfCorrect}>Submit</button>
      </div>
    );
  }
}
