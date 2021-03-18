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

                <div className="poemTable">
                    <div className="poemTableRow">
                             <div className="TitleRow">
                                 <div className="singlePoemTable">
                                     <div className="singlePoemTableRow">
                                         <div className="singlePoemTableCell TitleRow"> Title </div>
                                         <div className="singlePoemTableCell TitleRow"> Author </div>
                                         <div className="singlePoemTableCell TitleRow"> Status </div>
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