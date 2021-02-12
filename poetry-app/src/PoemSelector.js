import React from 'react';

class PoemSelector extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.changePoem(e.target.name);
    }

    render(){
        let rows = []
        rows.push(<option selected disabled>Select A Poem</option>)
        let productsAsArray = Object.keys(this.props.poems).map((pid) => this.props.poems[pid]);
        productsAsArray.forEach((poem) => {
            rows.push(<option value={poem.name}>{poem.name}</option>)
        });
        return(
            <div>
                <select oncChange = {this.handleChange}>
                    {rows}
                </select>
                <blockquote>
                    When to the sessions of sweet silent thought<br/>
                    I summon up remembrance of things past,<br/>
                    I sigh the lack of many a thing I sought,<br/>
                    And with old woes new wail my dear times waste:<br/><br/>
                    Then can I drown an eye, unusd to flow,<br/>
                    For precious friends hid in deaths dateless night,<br/>
                    And weep afresh loves long since cancelld woe,<br/>
                    And moan th expense of many a vanishd sight;<br/><br/>
                    Then can I grieve at grievances foregone,<br/>
                    And heavily from woe to woe tell oer<br/>
                    The sad account of fore-bemoaned moan,<br/>
                    Which I new pay as if not paid before.<br/><br/>
                    But if the while I think on thee, dear friend,<br/>
                    All losses are restord, and sorrows end.
                </blockquote>
                <cite> Shakespeare </cite>
            </div>
        );
    }
}

export default PoemSelector;