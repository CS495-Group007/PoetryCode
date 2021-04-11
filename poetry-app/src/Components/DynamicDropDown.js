import { Multiselect } from 'multiselect-react-dropdown';
import React from 'react';

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