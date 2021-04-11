import React from 'react';
import '../../Styling/DashboardStyling.css';

/**
 * Some constants to keep values consistent and easy to change
 */
const collapsedClassName = "instructorDetailRowDetailCollapsed",
      expandedClassName = "instructorDetailRowDetailExpanded",
      titleLeftKey = "titleLeft",
      titleRightKey = "titleRight",
      detailsKey = "details",
      detailLeftKey = "detailLeft",
      detailRightKey = "detailRight";

const validViews = {
    "byStudent" : "Viewing by student",
    "byClass" : "Viewing by class",
    "byPoem" : "Viewing by poem"
}

/**
 * A top level dropdown row of the instructor dashboard. Abstracted into its own component for readability.
 */      
class IDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded : false,
            view : "byStudent",
            information: props.information
        }

        // Bindings
        this.toggleExpansion = this.toggleExpansion.bind(this);
        this.renderByStudent = this.renderByStudent.bind(this);
        this.renderByClass = this.renderByClass.bind(this);
        this.renderByPoem = this.renderByPoem.bind(this);
    }

    /**
     * Toggles the state variable that indicates whether or not the component is expanded. 
     */
    toggleExpansion() {
        this.setState(state => ({
            expanded: !state.expanded
        }));
    }

    // Separate methods for each rendering organization because it makes it easier to mix and
    // match the data.

    renderByStudent() {
        var detailLines = [];
        for (var i = 0; i < this.state.information[detailsKey].length; i++) {
            detailLines.push(
                <div className = { this.state.expanded ? expandedClassName : collapsedClassName }>
                    <div className="instructorDetailCell">
                        { this.props.information[detailsKey][i][detailLeftKey] }
                    </div>
                    <div className="instructorDetailCell classCell">
                        { this.props.information[detailsKey][i][detailRightKey] }
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
                                { this.props.information[titleLeftKey] }
                            </div>
                            <div className="instructorDetailCell classCell">
                                { this.props.information[titleRightKey] }
                            </div>
                        </div>
                        { detailLines }
                    </div>
                </div>
            </div>
        );
    }

    renderByClass() {
        var detailLines = [];
        for (var i = 0; i < this.props.information[detailsKey].length; i++) {
            detailLines.push(
                <div className = { this.state.expanded ? expandedClassName : collapsedClassName }>
                    <div className="instructorDetailCell">
                        { this.props.information[detailsKey][i][detailLeftKey] }
                    </div>
                    <div className="instructorDetailCell classCell">
                        { this.props.information[detailsKey][i][detailRightKey] }
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
                                { this.props.details[titleRightKey] }
                            </div>
                            <div className="instructorDetailCell classCell">
                                { this.props.details[titleLeftKey] }
                            </div>
                        </div>
                        { detailLines }
                    </div>
                </div>
            </div>
        );
    }

    renderByPoem() {

    }

    /**
     * A method to controct the n number of detail lines for a single component
     * @returns The detail lines of the subtable
     */
    render() {

        // Different values go in depending on the view. That's why we have the switch statements.
        switch(this.state.view) {
            case "byStudent":
                return this.renderByStudent();
            case "byPoem":
                return this.renderByPoem();
            default:
                return this.renderByStudent();
        }
        
    }
}

export default IDetails;