import React from 'react';
//var sortid = require('shortid');
import { DragDropContainer } from 'react-drag-drop-container';

/**
 * Component respresenting a colored block on the bottom of the page that can be dragged into a box.
 */
class Boxable extends React.Component {
    /**
     * Renders the individual box, giving it the correct targetKey, dragData, and customDragElement.
     */
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
            <div className = "outside">
                <div className = {this.props.color}>
                    {this.props.label}
                </div>
            </div>
          </DragDropContainer>
        </div>
      );
    }
  }

export default Boxable;