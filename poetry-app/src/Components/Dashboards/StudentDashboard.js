import React from 'react';
import '../../Styling/DashboardStyling.css';
// import SortChooser from './SortChooser'


var studentPoems = {
    "Shakespeare" : {
        "Sonnet One": {
            "status": "c"
        },
        "Sonnet Two": {
            "status": "i",
            "currentResponse": "dactyl spondee iamb iamb trochee"
        }
    }
};

var studentName = "Connor";
var role = "s";


class StudentDashboard extends React.Component {

    translateStatus(status) {
        switch(status) {
            case('i'):
                return "In Progress";
            case('c'):
                return "Finished";
            default:
                return "";
        }
    }

    translateRole(role) {
        switch(role){
            case('s'):
                return "Student";
            case('i'):
                return "Instructor";
            default:
                return ""
        }
    }

    render() {

        var poemsList = [];

        for (var poet in studentPoems) {
            for (var p in studentPoems[poet]) {
                console.log(p)
                poemsList.push(
                    <div className="listedPoem">
                        <div className="listedPoemTitle"> {p} </div>
                        <div className="listedPoemProgress"> { this.translateStatus(studentPoems[poet][p]["status"]) } </div>
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
                
                {poemsList}

            </div>
        );
    }
}

export default StudentDashboard;