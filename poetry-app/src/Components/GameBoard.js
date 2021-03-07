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
      </div>
    );
  }
}
