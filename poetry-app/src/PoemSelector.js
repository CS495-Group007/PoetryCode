import React from 'react';

class PoemSelector extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.changePoem(event.target.value);
    }

    render(){
        let rows = []
        rows.push("");
        rows.push(<option selected disabled>Select A Poem</option>)
        let poemsAsArray = Object.keys(this.props.poems).map((pid) => this.props.poems[pid]);
        poemsAsArray.forEach((poem) => {
            rows.push(<option value={poem.id}>{poem.name}</option>)
        });
        poemsAsArray.unshift("");
        return(
            <div>
                <select value = {this.currentPoemName} onChange = {this.handleChange}>
                    {rows}
                </select>
                <blockquote>
                        {poemsAsArray[this.props.currentPoemNumber].text}
                </blockquote>
                <cite> {poemsAsArray[this.props.currentPoemNumber].poet} </cite>
            </div>
        );
    }
}

export default PoemSelector;