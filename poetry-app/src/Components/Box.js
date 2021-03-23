import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import BoxItem from './BoxItem';
import trashcan from '../Images/trashcan.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var shortid = require('short-id');
/**
 * Component that represents a line in the interactive gameboard.
 */
export default class Box extends React.Component {
    /**
     * Sets the initial state for items and colors (both arrays).
     * @constructor
     * @param props - contains information such as: updateGameBoard function in GameBoard component, row index, target key, and name.
     */
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        colors: []
      };
      this.deleteRow = this.deleteRow.bind(this);
    }
  
    /**
     * Function to delete the contents of the Box component and send that deletion message up through the hierarchy.
     */
    deleteRow(){
      this.setState({items: [], colors: []});
      this.props.updateGameBoard([], this.props.index);      
    }

    /**
     * Function to handle the drop of a boxable or box item into the box. If the box is not full, then the new item is added to the item and color array. Then, the gameboard is updated throughout the hierarchy.
     * @param e - holds information regarding the drop event. this data includes the block label and color.
     */
    handleDrop = (e) => {
      let items = this.state.items.slice();
      let colors = this.state.colors.slice();
      if(items.length < 5){
        items.push({label: e.dragData.label, uid: shortid.generate(), color: e.dragData.color});
        colors.push(e.dragData.color);
        this.setState({items: items, colors: colors});
        this.props.updateGameBoard(colors, this.props.index);
      }
    };
    
    /**
     * Function that handles swapping two elements in a box. Triggers when the box item in one box is dragged on top of another one.
     * @param {number} fromIndex - starting index of the item
     * @param {number} toIndex - ending index of the item
     * @param {number} dragData - contains relevant information for the boxable being dragged.
     */
    swap = (fromIndex, toIndex, dragData) => {
      let items = this.state.items.slice();
      let colors = this.state.colors.slice();
      const item = {label: dragData.label, uid: shortid.generate(), color: dragData.color};
      items.splice(toIndex, 0, item);
      colors.splice(toIndex, 0, dragData.color);
      if(items.length <= 5) {
        this.setState({items: items, colors: colors});
        this.props.updateGameBoard(colors, this.props.index);
      }
    };
  
    /**
     * Function to delete a box item once it has been dragged to a different position in the box or a different box altogether. Prevents duplication.
     * @param {number} uid - unique id for the box item in question
     */
    kill = (uid) => {
      let items = this.state.items.slice();
      let colors = this.state.colors.slice();
      const index = items.findIndex((item) => {
        return item.uid == uid
      });
      if (index !== -1) {
        items.splice(index, 1);
        colors.splice(index, 1);
      }
      this.setState({items: items, colors: colors});
      this.props.updateGameBoard(colors, this.props.index);
    };

    /**
     * Renders the Box row and the box items currently within it. This structure contains two layers of DropTarget to handle dropped items from the outside and items dragged between boxes.
     */
    render() {
      return (
        <Container>
          <Row>
            <Col lg={10}>
              <div className="component_box">
                <DropTarget onHit={this.handleDrop} targetKey={this.props.targetKey} dropData={{name: this.props.name}}>
                  <DropTarget onHit={this.handleDrop} targetKey="boxItem" dropData={{name: this.props.name}}>
                    <div className="box">
                      <table>
                        <tr>
                          {this.state.items.map((item, index) => {
                            return (
                              <td>
                                <BoxItem key={item.uid} uid={item.uid} kill={this.kill} index={index} swap={this.swap} color={item.color}>
                                  {item.label}
                                </BoxItem>
                              </td>
                            )
                          })}
                        </tr>
                      </table>
                    </div>
                  </DropTarget>
                </DropTarget>
              </div>
            </Col>
            <Col>
              <img src={trashcan} height = {20} width = {20} onClick = {this.deleteRow}/>
            </Col>
          </Row>
        </Container>
      );
    }
  }