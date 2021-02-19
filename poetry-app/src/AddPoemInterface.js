/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
// Adding a poem is going to look similar to how a student would scan a poem, BUT this is more of a blank canvas

class AddPoemInterface extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            poems: POEMS,
            currentPoemNumber: 0,
            currentPoemName: ''
        };
        this.changePoem = this.changePoem.bind(this);
    }

    changePoem(poemID){
        this.setState({currentPoemNumber: poemID});
    }

    render(){
        return(
            <div>
                <PoemSelector poems = {this.state.poems} changePoem = {this.changePoem} currentPoemNumber = {this.state.currentPoemNumber} currentPoemName = {this.currentPoemName}/>
                <GameBoard/>
            </div>
        );
    }
}

export default AddPoemInterface;