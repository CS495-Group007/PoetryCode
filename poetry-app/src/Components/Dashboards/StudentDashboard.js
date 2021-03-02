import React from 'react';
import DOMPurify from 'dompurify';

function PoemStatusInfo(props) {

}


class StudentDashboard extends React.Component {
    // constructor(props){
    //     super(props);
    // }

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

    render() {
        var poems = {
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

        var poemsList = [];

        for (var poet in poems) {
            for (var p in poems[poet]) {
                console.log(p)
                poemsList.push(
                    <div class="listedPoem">
                        <div class="listedPoemTitle"> {p} </div>
                        <div class="listedPoemProgress"> {this.translateStatus(poems[poet][p]["status"])} </div>
                    </div>
                );
            }
        }

        return ( 
            <div id = "studentDashboard" >
                <div class="DashboardTitle">
                    NAME's Dashboard
                </div>
                <div id="userDashboardLabel">
                    Student
                </div>

                <div class="regularDashboardLabel">
                    Poems in Progress
                </div>
                
                {poemsList}

            </div>
        );
    }
}

export default StudentDashboard;