import React from 'react';
import '../../Styling/DashboardStyling.css';

/**
 * Some constants to keep values consistent and easy to change
 */
const collapsedClassName = "instructorDetailRowDetailCollapsed",
      expandedClassName = "instructorDetailRowDetailExpanded",
      detailPrimaryKey = "detailPrimary",
      detailSecondaryKey = "detailSecondary";

/**
 * A top level dropdown row of the instructor dashboard. Abstracted into its own component for readability.
 */      
class IDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded : false
        }
        this.toggleExpansion = this.toggleExpansion.bind(this);
    }

    /**
     * Toggles the state variable that indicates whether or not the component is expanded. 
     */
    toggleExpansion() {
        console.log("Toggling");
        this.setState(state => ({
            expanded: !state.expanded
        }));
    }

    /**
     * A method to controct the n number of detail lines for a single component
     * @returns The detail lines of the subtable
     */
    render() {
        var detailLines = [];
        for (var i = 0; i < this.props.details.length; i++) {
            detailLines.push(
                <div className = { this.state.expanded ? expandedClassName : collapsedClassName }>
                    <div className="instructorDetailCell">
                        { this.props.details[i][detailPrimaryKey] }
                    </div>
                    <div className="instructorDetailCell classCell">
                        { this.props.details[i][detailSecondaryKey] }
                    </div>
                </div>
            );
        }

        return ( 
            <div className="instructorTableRow">
                <div className="instructorTableCell">
                    <div className = "instructorDetailTable" onClick = { this.toggleExpansion }>
                        <div className="instructorDetailRowPrimary">
                            <div className="instructorDetailCell">
                                { this.props.primaryName }
                            </div>
                            <div className="instructorDetailCell classCell">
                                { this.props.secondaryName }
                            </div>
                        </div>
                        { detailLines }
                    </div>
                </div>
            </div>
        );
    }
}

export default IDetails;