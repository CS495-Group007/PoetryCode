import React from 'react';
import '../../Styling/DashboardStyling.css';

class Dropdown extends React.Component {
    constructor(options){
        super();

        console.log(options);
    
        this.state = {
           displayMenu: false,
        };
    
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
    
    };
    
    showDropdownMenu(event) {
            event.preventDefault();
            this.setState({ displayMenu: true }, () => {

            });
    }
    
      render() {
        return (
            <div className="sortChoiceTable">
                <div className="sortChoiceTableRow">
                    <div className = "sortChoiceTableCell">

                    </div>
                    <div className = "sortChoiceTableCell">
                        
                    </div>
                    <div className = "sortChoiceTableCell">
                        
                    </div>
                </div>
            </div>
    
        );
      }
    }
    
    export default Dropdown;