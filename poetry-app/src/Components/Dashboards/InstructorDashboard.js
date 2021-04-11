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
 * The list of views
 */
var views = [
    "byStudent",
    "byPoem"
]

/**
 * The complete instructor dashboard that displays student status information
 * and other pertinent info for instructors to monitor their students' progresses
 */
class InstructorDashboard extends React.Component {

   

    constructor() {
        super();

        /** Binding the translator method and the render methods for each view */
        this.viewTranslation = this.viewTranslation.bind(this);
        this.renderByStudent = this.renderByStudent.bind(this);
        this.renderByPoem = this.renderByPoem.bind(this);
        this.rotateView = this.rotateView.bind(this);
        this.renderIDetails = this.renderIDetails.bind(this);

        // this.renderIDetails();

        this.state = {
            headLeft: "Poem",
            headRight: " ",
            CurrentView: "byPoem",
            CurrentViewIndex: 1,
            DetailsCells: this.renderIDetails(1)
        }
    }

    rotateView() {
        var newViewIndex = (this.state.CurrentViewIndex + 1) % views.length,
            newLeft, newRight;


        switch(newViewIndex) {
            case 0 :
                newLeft = "Student";
                newRight = "Class";
                break;
            case 1 :
                newLeft = "Poem";
                newRight = " ";
                break;
            default:
                return "";
        }

        this.setState(s => ({
            CurrentViewIndex : newViewIndex,
            DetailsCells : this.renderIDetails(newViewIndex),
            headLeft : newLeft,
            headRight : newRight
        }));

    }

    /** The viewTranslation method translates what's stored in the props into something aesthetic for display */
    viewTranslation() {
        switch(this.state.CurrentViewIndex) {
            case 0 :
                return "By Student";
            case 1 :
                return "By Poem";
            default:
                return "";
        }
    }

    renderByStudent() {
        var data = GetData();
        var information = data;

        console.log("The data when rendering by student");
        console.log(data);

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

    renderIDetails(v) {

        var newIDetailCells = [], stringView;

        var information = [];
        switch(v) {
            case 0:
                stringView = "byStudent";
                information = this.renderByStudent();
                break;
            case 1:
                stringView = "byPoem";
                information = this.renderByPoem();
                break;
            default:
                stringView = "byStudent";
                information = this.renderByStudent();
        }

        // Make the IDetails cells
        for(var i = 0; i < information.length; i++){
            newIDetailCells.push(
                <IDetails view = { stringView } information = { information[i] }></IDetails>
            )
        }

        return newIDetailCells;

    }

    render() {
        /** 
         * The Instructor dashboard creates a "IDetails" element for each student / macro organization depending on the view
         * Each one is its own dropdown to see more detailed information on the high level.
         */
        return (
            <div className = "outer">
                <div className = "dash-inner">
                    <div id = "studentDashboard" >
                        <div className="DashboardTitle">
                            { instructorTitle }{ instructorName }'s Instructor Dashboard
                        </div>

                        <button id="viewButton" onClick={ this.rotateView }>{ this.viewTranslation() }</button>

                        <div className="instructorTable">
                            <div className="instructorTableRow">
                                <div className="instructorTableCell">
                                    <div className="instructorHead">
                                        <div className="instructorHeadRow">
                                            <div className="instructorHeadCell">{ this.state.headLeft }</div>
                                            <div className="instructorHeadCell"> { this.state.headRight } </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            { this.state.DetailsCells }

                        </div>

                    </div>
                </div>
            </div>
        );
    }
    
}

export default InstructorDashboard;