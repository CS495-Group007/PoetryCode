import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import '../Styling/BoxItem.css';

/**
 * This component represents a boxable that is displayed in the box in which it has been drug into.
 */
export default class BoxItem extends React.Component {
    /**
     * Calles on the constructor of the super class.
     * @constructor
     */
    constructor(props) {
      super(props);
    }
    
    /**
     * Function to handle the drop of a box item. Swaps it with the item that it is dragged to (can be no other item).
     * @param e - contains information about the drop data such as its index.
     */
    handleDrop = (e) => {
      e.stopPropagation();
      this.props.swap(e.dragData.index, this.props.index, e.dragData);
      e.containerElem.style.visibility="hidden";
    };
  
    /**
     * Function to delete a box item from its original position after it has been swapped to a new position.
     */
    deleteMe = () => {
      this.props.kill(this.props.uid);
    };
  
    /**
     *Renders the BoxItems. The Box items consist of an outer DragDropContainer and an inner Drop Target. This enables the box items to be able to be dragged and rearranged.
     */
    render() {
      return (
        <div className="box_item_component">
          <DragDropContainer
              targetKey="boxItem"
              dragData={{label: this.props.children, index: this.props.index, color: this.props.color}}
              onDrop={this.deleteMe}
              disappearDraggedElement={true}
              dragHandleClassName="grabber"
            >
              <DropTarget
                onHit={this.handleDrop}
                targetKey="boxItem"
              >
                <div className="outside">
                  <div className={this.props.color}>
                    <span className="grabber">{this.props.children}</span>
                  </div>
                </div>
            </DropTarget>
          </DragDropContainer>
        </div>
      );
    }
  }