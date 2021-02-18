import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './App.css';

class GameBoard extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <DropTarget targetKey = "gameBoard"></DropTarget>
                </div>
                <div>
                    <DragDropContainer dragData = {{label: 'Yellow'}} targetKey = "gameBoard" dragClone = {true}>
                        <span id = "yellowRectangle">' -</span>
                    </DragDropContainer>
                    <DragDropContainer dragData = {{label: 'Blue'}} targetKey = "gameBoard" dragClone = {true}>
                        <span id = "blueRectangle">- '</span>
                    </DragDropContainer>
                    <DragDropContainer dragData = {{label: 'Red'}} targetKey = "gameBoard" dragClone = {true}>
                        <span id = "redRectangle">' - -</span>
                    </DragDropContainer>
                    <DragDropContainer dragData = {{label: 'Gray'}} targetKey = "gameBoard" dragClone = {true}>
                        <span id = "grayRectangle">- - '</span>
                    </DragDropContainer>
                    <DragDropContainer dragData = {{label: 'Black'}} targetKey = "gameBoard" dragClone = {true}>
                        <span id = "blackRectangle">' '</span>
                    </DragDropContainer>
                    <DragDropContainer dragData = {{label: 'Green'}} targetKey = "gameBoard" dragClone = {true}>
                        <span id = "greenRectangle">- -</span>
                    </DragDropContainer>
                </div>
            </div>
        );
    }
}

export default GameBoard;