import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
];

class BlockNumberDropdown extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.props.handleBlockNumberChange(event.value);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12"></div>
                        <div className="col-md-12">
                            <Select options={techCompanies} onChange={this.handleChange}/>
                        </div>  
                    <div className="col-md-12"></div>
                </div>
            </div>
        );
    }
}

export default BlockNumberDropdown;