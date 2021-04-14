import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

//dummy data
const blockNumbers = [
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
];

/**
 * Component responsible for implementing the block number dropdown menu
 */
class BlockNumberDropdown extends React.Component{
    /**
     * @constructor
     * @param props - properties passed down from the AddAPoemInterface Component.
     */
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    /**
     * Function responsible for catching a block number change in the drop down. The function catches the change event and notifies the parent component of the new value.
     * @param event
     */
    handleChange(event){
        this.props.handleBlockNumberChange(event.value);
    }

    /**
     * Function responsible for rendering the dropdown menu.
     */
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12"></div>
                        <div className="col-md-12">
                            <Select options={blockNumbers} onChange={this.handleChange}/>
                        </div>  
                    <div className="col-md-12"></div>
                </div>
            </div>
        );
    }
}

export default BlockNumberDropdown;