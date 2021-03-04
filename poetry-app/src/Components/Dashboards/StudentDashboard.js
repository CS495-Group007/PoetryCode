import React from 'react';
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

        for (var poet in studentPoems) {
            for (var p in studentPoems[poet]) {
                var classnameList = ["poemTableCell"];
                switch(studentPoems[poet][p]["status"]){
                    case incompletePoem:
                        classnameList.push("incompletePoem");
                        break;
                    case completePoem:
                        classnameList.push("completePoem");
                        break;
                    default:
                        classnameList.push("unstartedPoem");
                        break;
                }

                poemsTable.push(
                    <div className="poemTableRow">
                        <div className={classnameList.join(' ')}>
                            <div className="singlePoemTable">
                                    <div className="singlePoemTableRow">
                                        <div className="singlePoemTableCell listedPoemTitle"> {p} </div>
                                        <div className="singlePoemTableCell listedPoemAuthor"> {poet} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                );
            }
        }

        for (poet in allPoems) {
            for (p in allPoems[poet]) {
                if(studentPoems[poet] && studentPoems[poet][p]) {
                    continue
                }
                poemsTable.push(
                    <div className="poemTableRow">
                        <div className="poemTableCell">
                            <div className="singlePoemTable">
                                <div className="singlePoemTableRow">
                                    <div className="singlePoemTableCell listedPoemTitle"> {p} </div>
                                    <div className="singlePoemTableCell listedPoemAuthor"> {poet} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return ( 
            <div id = "studentDashboard" >
                <div className="DashboardTitle">
                    { studentName }'s { this.translateRole(role) } Dashboard
                </div>

                <div className="regularDashboardLabel">
                    My Poems
                </div>

                <div className="poemTable">
                    { poemsTable }
                </div>

            </div>
        );
    }
}

export default StudentDashboard;