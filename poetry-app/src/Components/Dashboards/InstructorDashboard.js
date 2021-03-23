import React from 'react';
import '../../Styling/DashboardStyling.css';
import IDetails from "./IDetails"

/** Some constant variables for consistency. Even when not called, these function as a reference within the file. */
const detailPrimaryKey = "detailPrimary",
      detailSecondaryKey = "detailSecondary";

/** The instructor Title and Name are part of the session data */
var instructorTitle = "";
var instructorName = "";

// Dummy values for testing
instructorTitle = "Dr.";
instructorName = "Tavares";

// Production DB hit


/**
 * The complete instructor dashboard that displays student status information
 * and other pertinent info for instructors to monitor their students' progresses
 */
class InstructorDashboard extends React.Component {

    constructor() {
        super();
        /** The way the dashboard is currently being viewed / organized */
        this.currentView = "byStudent";
        /** Binding the translator method */
        this.viewTranslation = this.viewTranslation.bind(this);
    }

    /** The viewTranslation method translates what's stored in the props into something aesthetic for display */
    viewTranslation(v) {
        switch(v) {
            case 'byStudent' :
                return "By Student";
            default:
                return "";
        }
    }

    render() {

        /** "details" is just some dummy data for testing and development. In prod it'll be populated by DB info. */
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

        /** 
         * The Instructor dashboard creates a "IDetails" element for each student / macro organization depending on the view
         * Each one is its own dropdown to see more detailed information on the high level.
         */
        return ( 
            <div id = "studentDashboard" >
                <div className="DashboardTitle">
                    { instructorTitle }{ instructorName }'s Instructor Dashboard
                </div>

                <div className="instructorTable">
                    <div className="instructorTableRow">
                        <div className="instructorTableCell">
                            <div className="instructorHead">
                                <div className="instructorHeadRow">
                                    <div className="instructorHeadCell">Student</div>
                                    <div className="instructorHeadCell">Class</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <IDetails primaryName = "Connor" secondaryName = "Shakespeare 210" details = { details[0] }></IDetails>
                    <IDetails primaryName = "Nash" secondaryName = "Shakespeare 101" details = { details[1] }></IDetails>
                    <IDetails primaryName = "Gerome" secondaryName = "Shakespeare 201" details = { details[2] }></IDetails>
                    <IDetails primaryName = "Maddie" secondaryName = "Shakespeare 10" details = { details[3] }></IDetails>
                    <IDetails primaryName = "Jeremy" secondaryName = "Shakespeare 401" details = { details[4] }></IDetails>

                </div>

            </div>
        );
    }
    
}

export default InstructorDashboard;