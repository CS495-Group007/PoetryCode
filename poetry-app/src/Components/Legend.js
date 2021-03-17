import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";

class Legend extends React.Component{

    render(){
        return(
            <div class=".container">
                <DropdownButton id="dropdown-item-button" variant="secondary" title="Legend">
                    <Dropdown.ItemText>Yellow - Iamb</Dropdown.ItemText>                        
                    <Dropdown.ItemText>Blue - Trochee</Dropdown.ItemText>
                    <Dropdown.ItemText>Red - Dactyl</Dropdown.ItemText>
                    <Dropdown.ItemText>Grey - Anapest</Dropdown.ItemText>
                    <Dropdown.ItemText>Black - Spondee</Dropdown.ItemText>
                    <Dropdown.ItemText>Green - Pyrrhic</Dropdown.ItemText>
                </DropdownButton>
            </div>
        );
    }
}

export default Legend;