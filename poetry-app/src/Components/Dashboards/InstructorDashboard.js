import React from 'react';
import '../../Styling/DashboardStyling.css';
import IDetails from "./IDetails"

/** Some constant variables for consistency. Even when not called, these function as a reference within the file. */
const detailLeftKey = "detailLeft",
      detailRightKey = "detailRight";

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
            case 'byClass' :
                return "By Class";
            case 'byPoem' :
                return "By Poem";
            default:
                return "";
        }
    }

    render() {

        /** "information" is just some dummy data for testing and development. In prod it'll be populated by DB info. */
        var information = [
            {
                "titleLeft" : "Connor Meadows",
                "titleRight" : "EN101",
                "details" : [
                    {
                        "detailLeft" : "Sonnet 1",
                        "detailRight" : "In Progress"
                    },
                    {
                        "detailLeft" : "Sonnet 5",
                        "detailRight" : "In Progress"
                    },
                    {
                        "detailLeft" : "Sonnet 10",
                        "detailRight" : "Complete"
                    }
                ]
            },
            {
                "titleLeft" : "Nash Stokes",
                "titleRight" : "EN201",
                "details" : [
                    {
                        "detailLeft" : "Sonnet 1",
                        "detailRight" : "In Progress"
                    },
                    {
                        "detailLeft" : "Sonnet 5",
                        "detailRight" : "In Progress"
                    },
                    {
                        "detailLeft" : "Sonnet 16",
                        "detailRight" : "Complete"
                    },
                    {
                        "detailLeft" : "Sonnet 17",
                        "detailRight" : "In Progress"
                    },
                    {
                        "detailLeft" : "Sonnet 19",
                        "detailRight" : "Complete"
                    },
                    {
                        "detailLeft" : "Sonnet 28",
                        "detailRight" : "In Progress"
                    },
                    {
                        "detailLeft" : "Sonnet 37",
                        "detailRight" : "Complete"
                    }
                ]
            },
            {
                "titleLeft" : "Maddie Macaulay",
                "titleRight" : "EN301",
                "details" : [
                    {
                        "detailLeft" : "Sonnet 3",
                        "detailRight" : "Complete"
                    },
                    {
                        "detailLeft" : "Sonnet 5",
                        "detailRight" : "In Progress"
                    }
                ]
            },
            {
                "titleLeft" : "Jeremy Tucker",
                "titleRight" : "EN401",
                "details" : [
                    {
                        "detailLeft" : "Sonnet 12",
                        "detailRight" : "In Progress"
                    },
                    {
                        "detailLeft" : "Sonnet 15",
                        "detailRight" : "In Progress"
                    },
                    {
                        "detailLeft" : "Sonnet 18",
                        "detailRight" : "Complete"
                    }
                ]
            }
        ];

        /** 
         * The Instructor dashboard creates a "IDetails" element for each student / macro organization depending on the view
         * Each one is its own dropdown to see more detailed information on the high level.
         */
        return (
            <div className = "outer">
                <div className = "inner">
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
                            
                            <IDetails view = { this.currentView } information = { information[0] }></IDetails>
                            <IDetails view = { this.currentView } information = { information[1] }></IDetails>
                            <IDetails view = { this.currentView } information = { information[2] }></IDetails>
                            <IDetails view = { this.currentView } information = { information[3] }></IDetails>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
    
}

export default InstructorDashboard;