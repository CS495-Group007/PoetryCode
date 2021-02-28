/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React from 'react';
import GameBoard from './GameBoard.js';
import '../Styling/GamePage.css'

// Adding a poem is going to look similar to how a student would scan a poem, BUT this is more of a blank canvas


class AddPoemInterface extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lines: [],
            numLines: 0,
            poemName: "",
            author: ""
        };
        this.processLines = this.processLines.bind(this);
        this.textChange = this.textChange.bind(this);
    }

    processLines(event){
        event.preventDefault();
        console.log(event);
        // this.setState({currentPoemNumber: poemID});
    }

    textChange(event) {
        var ls = event.target.value.split('\n');
        this.setState({
            lines: ls,
            numLines : ls.length
        });
        console.log(this.state.numLines);
    }
 
    render(){
        return(
            <div id="gameInner" itemID="gameInner">
                <form onSubmit={this.processLines}>
                    <label className="InputLabel">Poem Text:</label>
                    <textarea className="poemInput" id="thePoemText" onChange={this.textChange}/>
                    <GameBoard/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPoemInterface;