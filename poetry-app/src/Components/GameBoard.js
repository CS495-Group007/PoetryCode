import React from 'react';
import Boxable from './Boxable';
import Box from './Box';
import '../Styling/GameBoard.css';


export default class GameBoard extends React.Component {
  render() {
    var i;
    let boxes = [];
    for(i=0; i < 3; i++){
      boxes.push(<Box targetKey="box"/>);
    }
    return (
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
    );
  }
}
