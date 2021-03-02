import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import BoxItem from './BoxItem';
var shortid = require('short-id');
export default class Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        colors: []
      };
    }
  
    handleDrop = (e) => {
      let items = this.state.items.slice();
      let colors = this.state.colors.slice();
      if(items.length < 5){
        items.push({label: e.dragData.label, uid: shortid.generate(), color: e.dragData.color});
        colors.push(e.dragData.color);
        this.setState({items: items, colors: colors});
        this.props.updateGameBoard(colors, this.props.index);
      }
      //e.containerElem.style.visibility="hidden";
    };
  
    swap = (fromIndex, toIndex, dragData) => {
      let items = this.state.items.slice();
      let colors = this.state.colors.slice();
      const item = {label: dragData.label, uid: shortid.generate(), color: dragData.color};
      items.splice(toIndex, 0, item);
      colors.splice(toIndex, 0, dragData.color);
      if(items.length <= 5)
        this.setState({items: items, colors: colors});
    };
  
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
    };
  
    render() {
      /*
          Note the two layers of DropTarget. 
          This enables it to handle dropped items from 
          outside AND items dragged between boxes.
      */
      return (
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
      );
    }
  }