import { Multiselect } from 'multiselect-react-dropdown';
import React from 'react';

/**
 * Component responsible for implementing the dynamic dropdown for selecting tags for a poem.
 */
class DynamicDropDown extends React.Component {
    render(){
        return(
            <div>
                <Multiselect
                    options={this.props.options} 
                    onSelect={this.props.onSelect}
                    onRemove={this.props.onRemove}
                    isObject = {false}
                    selectionLimit="6"
                    placeholder = ""
                />
            </div>
        );
    }
}

export default DynamicDropDown;