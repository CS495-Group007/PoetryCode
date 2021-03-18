import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/DashboardStyling.css';

// Variable declarations
var instructorTitle = "";
var instructorName = "";

// Dummy values for testing
instructorTitle = "Dr.";
instructorName = "Tavares";

// Production DB hit


class InstructorDashboard extends React.Component {

    constructor() {
        super();
        this.currentView = "byStudent";
        this.viewTranslation = this.viewTranslation.bind(this);
    }

    viewTranslation(v) {
        switch(v) {
            case 'byStudent' :
                return "By Student";
            default:
                return "";
        }
    }

    render() {
        return ( 
            <div id = "studentDashboard" >
                <div className="DashboardTitle">
                { instructorTitle }{ instructorName }'s Instructor Dashboard
                </div>
    
                <div className="viewSelector">
                    Currently Viewing: <span className="currentViewSpan">{ this.viewTranslation(this.currentView) }</span><br/>
                    &#40;Click to change&#41;
                </div>

                <div className="instructorTable">
                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <div className="instructorDetailTable">
                                <div className="instructorDetailRowPrimary">
                                    <div className="instructorDetailCell">
                                        Connor
                                    </div>
                                    <div className="instructorDetailCell classCell">
                                        Shakespeare 201
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 1
                                    </div>
                                    <div className="instructorDetailCell">
                                        Complete
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 2
                                    </div>
                                    <div className="instructorDetailCell">
                                        In Progress
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <div className="instructorDetailTable">
                                <div className="instructorDetailRowPrimary">
                                    <div className="instructorDetailCell">
                                        Nash
                                    </div>
                                    <div className="instructorDetailCell classCell">
                                        Shakespeare 101
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 1
                                    </div>
                                    <div className="instructorDetailCell">
                                    In Progress
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 2
                                    </div>
                                    <div className="instructorDetailCell">
                                        In Progress
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <div className="instructorDetailTable">
                                <div className="instructorDetailRowPrimary">
                                    <div className="instructorDetailCell">
                                        Gerome
                                    </div>
                                    <div className="instructorDetailCell classCell">
                                        Shakespeare 101
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 1
                                    </div>
                                    <div className="instructorDetailCell">
                                    In Progress
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 12
                                    </div>
                                    <div className="instructorDetailCell">
                                        In Progress
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <div className="instructorDetailTable">
                                <div className="instructorDetailRowPrimary">
                                    <div className="instructorDetailCell">
                                        Maddie
                                    </div>
                                    <div className="instructorDetailCell classCell">
                                        Shakespeare 401
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 100
                                    </div>
                                    <div className="instructorDetailCell">
                                    In Progress
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 2
                                    </div>
                                    <div className="instructorDetailCell">
                                        In Progress
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 22
                                    </div>
                                    <div className="instructorDetailCell">
                                        Complete
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 12
                                    </div>
                                    <div className="instructorDetailCell">
                                        Complete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <div className="instructorDetailTable">
                                <div className="instructorDetailRowPrimary">
                                    <div className="instructorDetailCell">
                                        Jeremy
                                    </div>
                                    <div className="instructorDetailCell classCell">
                                        Shakespeare 101
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 100
                                    </div>
                                    <div className="instructorDetailCell">
                                    In Progress
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 2
                                    </div>
                                    <div className="instructorDetailCell">
                                        In Progress
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 22
                                    </div>
                                    <div className="instructorDetailCell">
                                        Complete
                                    </div>
                                </div>
                                <div className="instructorDetailRowDetail">
                                    <div className="instructorDetailCell">
                                        Sonnet 12
                                    </div>
                                    <div className="instructorDetailCell">
                                        Complete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        );
    }
    
}

export default InstructorDashboard;