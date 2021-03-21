import React from 'react';
import '../../Styling/DashboardStyling.css';

const collapsedClassName = "instructorDetailRowDetailCollapsed",
      expandedClassName = "instructorDetailRowDetailExpanded",
      detailPrimaryKey = "detailPrimary",
      detailSecondaryKey = "detailSecondary";

export default class IDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded : false
        }
        this.toggleExpansion = this.toggleExpansion.bind(this);
    }

    toggleExpansion() {
        console.log("Toggling");
        this.setState(state => ({
            expanded: !state.expanded
        }));
    }

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