import React from 'react';
//var shortid = require('shortid');
import { DragDropContainer } from 'react-drag-drop-container';

/*
    Boxable -- a thing you can drag into a Box
*/

export default class Boxable extends React.Component {
    render() {
      return (
        <div className="box_item_component" style={{display: 'inline-block'}}>
          <DragDropContainer
            targetKey={this.props.targetKey}
            dragData={{label: this.props.label, color: this.props.color}}
            customDragElement={this.props.customDragElement}
            onDragStart={()=>(console.log('start'))}
            onDrag={()=>(console.log('dragging'))}
            onDragEnd={()=>(console.log('end'))}
            onDrop={(e)=>(console.log(e))}
            dragClone = {true}
          >
            <div className = "outer">
                <div className = {this.props.color}>
                    {this.props.label}
                </div>
            </div>
          </DragDropContainer>
        </div>
      );
    }
  }