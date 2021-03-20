import React from 'react';
import '../../Styling/DashboardStyling.css';
import IDetails from "./IDetails"

// Constants
const detailPrimaryKey = "detailPrimary",
      detailSecondaryKey = "detailSecondary";

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

        var details = [
            [
                {
                    "detailPrimary" : "Sonnet 1",
                    "detailSecondary" : "In Progress"
                },
                {
                    "detailPrimary" : "Sonnet 5",
                    "detailSecondary" : "In Progress"
                },
                {
                    "detailPrimary" : "Sonnet 10",
                    "detailSecondary" : "Complete"
                }
            ],
            [
                {
                    "detailPrimary" : "Sonnet 1",
                    "detailSecondary" : "In Progress"
                },
                {
                    "detailPrimary" : "Sonnet 5",
                    "detailSecondary" : "In Progress"
                },
                {
                    "detailPrimary" : "Sonnet 10",
                    "detailSecondary" : "Complete"
                }
            ],
            [
                {
                    "detailPrimary" : "Sonnet 5",
                    "detailSecondary" : "In Progress"
                },
                {
                    "detailPrimary" : "Sonnet 10",
                    "detailSecondary" : "Complete"
                }
            ],
            [
                {
                    "detailPrimary" : "Sonnet 1",
                    "detailSecondary" : "In Progress"
                },
                {
                    "detailPrimary" : "Sonnet 5",
                    "detailSecondary" : "In Progress"
                }
            ],
            [
                {
                    "detailPrimary" : "Sonnet 10",
                    "detailSecondary" : "Complete"
                },
                {
                    "detailPrimary" : "Sonnet 15",
                    "detailSecondary" : "In Progress"
                },
                {
                    "detailPrimary" : "Sonnet 23",
                    "detailSecondary" : "Complete"
                }
            ]
        ]

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
                            <IDetails primaryName = "Connor" secondaryName = "Shakespeare 210" details = { details[0] }></IDetails>
                        </div>
                    </div>

                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <IDetails primaryName = "Nash" secondaryName = "Shakespeare 101" details = { details[1] }></IDetails>
                        </div>
                    </div>

                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <IDetails primaryName = "Gerome" secondaryName = "Shakespeare 201" details = { details[2] }></IDetails>
                        </div>
                    </div>

                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <IDetails primaryName = "Maddie" secondaryName = "Shakespeare 10" details = { details[3] }></IDetails>
                        </div>
                    </div>

                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <IDetails primaryName = "Jeremy" secondaryName = "Shakespeare 401" details = { details[4] }></IDetails>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    
}

export default InstructorDashboard;