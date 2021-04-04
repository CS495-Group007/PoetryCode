import React from 'react';
import '../../Styling/DashboardStyling.css';
import IDetails from "./IDetails"

/** Some constant variables for consistency. Even when not called, these function as a reference within the file. */
const detailLeftKey = "detailLeft",
      detailRightKey = "detailRight",
      titleLeftKey = "titleLeft",
      titleRightKey = "titleRight";

/** The instructor Title and Name are part of the session data */
var instructorTitle = "";
var instructorName = "";

// Dummy values for testing
instructorTitle = "Dr.";
instructorName = "Tavares";

// Production DB hit
function GetData() {
    var data = [
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

    return data;
}


/**
 * The complete instructor dashboard that displays student status information
 * and other pertinent info for instructors to monitor their students' progresses
 */
class InstructorDashboard extends React.Component {

    constructor() {
        super();
        /** The way the dashboard is currently being viewed / organized */
        this.state = {
            currentView: "byStudent"
        };
        /** Binding the translator method and the render methods for each view */
        this.viewTranslation = this.viewTranslation.bind(this);
        this.renderByStudent = this.renderByStudent.bind(this);
        this.renderByPoem = this.renderByPoem.bind(this);


    }

    /** The viewTranslation method translates what's stored in the props into something aesthetic for display */
    viewTranslation() {
        switch(this.state.currentView) {
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

    renderByStudent() {
        var data = GetData();
        var information = data;

        return information;
    }

    renderByPoem() {
        var data = GetData();

        var information = [];
        var pushedPoems = {};
        for(var i = 0; i < data.length; i++) {
            for(var j = 0; j < data[i]["details"].length; j++){
                // If there's not an instance of the poem in the pushed poems then it needs to be pushed
                if (!pushedPoems.hasOwnProperty(data[i]["details"][j][detailLeftKey])){
                    pushedPoems[data[i]["details"][j][detailLeftKey]] = information.length;

                    information.push({
                        titleLeft : data[i]["details"][j][detailLeftKey],
                        titleRight : " ",
                        "details" : []
                    })
                }
                // This happens no matter what
                information[pushedPoems[data[i]["details"][j][detailLeftKey]]]["details"].push({
                    detailLeft : data[i][titleLeftKey],
                    detailRight : data[i]["details"][j][detailRightKey]
                });
            }
        }

        return information;
    }

    render() {

        var information, instructorHeadLeft, instructorHeadRight;
        switch(this.state.currentView) {
            case 'byStudent' :
                information = this.renderByStudent();
                instructorHeadLeft = "Student";
                instructorHeadRight = "Class";
                break;
            case 'byPoem' :
                information = this.renderByPoem();
                instructorHeadLeft = "Poem";
                instructorHeadRight = " ";
                break;
            default:
                break;
        }

        // Make the IDetails cells
        var IDetailCells = [];
        for(var i = 0; i < information.length; i++){
            IDetailCells.push(
                <IDetails view = { this.currentView } information = { information[i] }></IDetails>
            )
        }

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
                                            <div className="instructorHeadCell">{ instructorHeadLeft }</div>
                                            <div className="instructorHeadCell"> { instructorHeadRight } </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            { IDetailCells }

                        </div>

                    </div>
                </div>
            </div>
        );
    }
    
}

export default InstructorDashboard;