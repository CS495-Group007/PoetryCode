/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Component in charge of rendering the dropdown for the GameBoard component that tells the student what each colored block represents.
 */
class Legend extends React.Component{
    /**
     * Function to render the component. Renders the toggle Legend button that offers information.
     */
    render(){
        return(
            <div className=".container">
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