import React from 'react';
import Boxable from './Boxable';
import Box from './Box';
import '../Styling/GameBoard.css';

export default class GameBoard extends React.Component {
  constructor(props){
    super(props);
    this.updateGameBoard = this.updateGameBoard.bind(this);
  }

  updateGameBoard(items, index){
    this.props.updateGameBoard(items, index);
  }
  
  render() {
    var i;
    let lines = [];
    for(i=0; i < this.props.currentPoemLines; i++){
      lines.push(<Box 
                  targetKey="box" 
                  index={i} 
                  updateGameBoard={this.updateGameBoard} 
                />);
    }

    return (
      <div>
        <div className="drag_things_to_boxes">
          <div className="boxes">
            {lines}
          </div>
          <div style={{clear: 'both'}}>&nbsp;</div>
        </div>
      </div>
    );
  }
}