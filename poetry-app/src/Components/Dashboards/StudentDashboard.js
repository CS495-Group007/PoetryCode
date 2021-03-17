import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/DashboardStyling.css';
// import SortChooser from './SortChooser'

// DB Constants so regardless of what we put in the DB I won't have to change these a lot of places
const completePoem = "complete", 
      incompletePoem = "inProgress",
      studentIndicator = "student",
      instructorIndicator = "instructor";


// Dummy data for testing
var studentPoems = {
    "Shakespeare" : {
        "Sonnet Two": {
            "status": completePoem
        },
        "Sonnet Four": {
            "status": incompletePoem,
            "currentResponse": "dactyl spondee iamb iamb trochee"
        }
    },
    "Catullus" : {
        "Carmen 1" : {
            "status" : incompletePoem,
            "currentResponse": "dactyl spondee iamb iamb trochee"
        }
    }
};

var allPoems = {
    "Shakespeare" : {
        "Sonnet One" : {

        },
        "Sonnet Two" : {

        },
        "Sonnet Three" : {

        },
        "Sonnet Four" : {

        }
    },
    "Catullus" : {
        "Carmen 1" : {

        },
        "Carmen 2" : {

        },
        "Carmen 3" : {

        },
        "Carmen 4" : {
            
        },
        "Carmen 5" : {

        },
        "Carmen 6" : {
            
        },
        "Carmen 7" : {

        },
        "Carmen 8" : {
            
        }
    }
}

var studentName = "Connor";
var role = studentIndicator;

// End of dummy data


class StudentDashboard extends React.Component {

    // Translators turn DB information into aesthetic equivalents
    translateStatus(status) {
        switch(status) {
            case(incompletePoem):
                return "In Progress";
            case(completePoem):
                return "Finished";
            default:
                return "";
        }
    }

    translateRole(role) {
        switch(role){
            case(studentIndicator):
                return "Student";
            case(instructorIndicator):
                return "Instructor";
            default:
                return ""
        }
    }

    render() {

        var poemsTable = [];

        var incompletePoems = [], 
            completePoems = [], 
            unstartedPoems = [];

        var completionStatus = "";

        var newTableCell;

        for (var poet in studentPoems) {
            for (var p in studentPoems[poet]) {
                var classnameList = ["poemTableCell"];
                switch(studentPoems[poet][p]["status"]){
                    case incompletePoem:
                        completionStatus = "Incomplete";
                        classnameList.push("incompletePoem");
                        break;
                    case completePoem:
                        completionStatus = "Complete";
                        classnameList.push("completePoem");
                        break;
                    default:
                        completionStatus = "Not Started";
                        classnameList.push("unstartedPoem");
                        break;
                }

                newTableCell = (
                    <div className="poemTableRow">
                        <div className={classnameList.join(' ')}>
                            <Link to="/simply-scansion" className="reactLink" >
                                <div className="singlePoemTable">
                                    <div className="singlePoemTableRow">
                                        <div className="singlePoemTableCell listedPoemTitle"> {p} </div>
                                        <div className="singlePoemTableCell listedPoemAuthor">  {poet} </div>
                                        <div className="singlePoemTableCell listedPoemStatus"> {completionStatus} </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                );

                switch(studentPoems[poet][p]["status"]){
                    case incompletePoem:
                        incompletePoems.push(newTableCell);
                        break;
                    case completePoem:
                        completePoems.push(newTableCell);
                        break;
                    default:
                        unstartedPoems.push(newTableCell);
                        break;
                }
            }
        }

        for (poet in allPoems) {
            for (p in allPoems[poet]) {
                if(studentPoems[poet] && studentPoems[poet][p]) {
                    continue
                }
                unstartedPoems.push(
                    <div className="poemTableRow">
                        <div className="poemTableCell unstartedPoem">
                            <Link to="/simply-scansion" className="reactLink" >
                                <div className="singlePoemTable">
                                    <div className="singlePoemTableRow">
                                        <div className="singlePoemTableCell listedPoemTitle"> {p} </div>
                                        <div className="singlePoemTableCell listedPoemAuthor"> {poet} </div>
                                            <div className="singlePoemTableCell listedPoemStatus"> Not Started </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            }
        }

        poemsTable.push(incompletePoems, unstartedPoems, completePoems);

        return ( 
            <div id = "studentDashboard" >
                <div className="DashboardTitle">
                    { studentName }'s { this.translateRole(role) } Dashboard
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
                    { poemsTable }
                </div>

            </div>
        );
    }
}

export default StudentDashboard;