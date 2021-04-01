import React from 'react';
import Boxable from './Boxable';
import Box from './Box';
import '../Styling/GameBoard.css';

/**
 * Component representing the interactive simply scansion gameboard.
 */
class GameBoard extends React.Component {
  /**
   * Calls the constructor of the parent component and binds the updateGameBoard function to this.
   * @constructor
   */
  constructor(props){
    super(props);
    this.updateGameBoard = this.updateGameBoard.bind(this);
  }
  
  /**
   * Function to access the updateGameBoard function in the SimplyScansion component.
   * @param {Array} items - contains the array of items in the current row of the gameboard.
   * @param {number} index - contains the index of the row being updated.
   */
  updateGameBoard(items, index){
    this.props.updateGameBoard(items, index);
  }
  
  /**
   * Renders a number of boxes equal to the number of poem lines. Passes the index of the row to the box, the targetKey, and the updateGameBoard function.
   */
  render() {
    var i;
    let lines = [];
    for(i=0; i < this.props.currentPoemLines; i++){
      lines.push(<Box 
                  targetKey="box" 
                  index={i} 
                  updateGameBoard={this.updateGameBoard} 
                  blockLimit = {this.props.blockLimit}
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

export default GameBoard;