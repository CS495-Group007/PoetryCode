import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/DashboardStyling.css';

/** Setting these variables as constants for consistency across the file */
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
            "poemText" : ['When, in disgrace with fortune and men’s eyes,','I all alone beweep my outcast state,','And trouble deaf heaven with my bootless cries,','And look upon myself and curse my fate,','Wishing me like to one more rich in hope,','Featured like him, like him with friends possessed,','Desiring this man’s art and that man’s scope,','With what I most enjoy contented least;','Yet in these thoughts myself almost despising,','Haply I think on thee, and then my state,','(Like to the lark at break of day arising','From sullen earth) sings hymns at heaven’s gate;','For thy sweet love remembered such wealth brings','That then I scorn to change my state with kings.'],
            "key" : [["yellow","purple","yellow","purple","yellow"],["purple", "yellow", "purple", "yellow", "purple"],["yellow", "purple","yellow", "purple","yellow"]],
            "lines" : 14
        },
        "Sonnet Two" : {

        },
        "Sonnet Three" : {

        },
        "Sonnet Four" : {
            "poemText" :['Line 1','Line 2','Line 3'],
            "key" : [["yellow","purple","yellow","purple","yellow"],["purple", "yellow", "purple", "yellow", "purple"],["yellow", "purple", "yellow", "purple", "yellow"]],
            "lines" : 3
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

/** StudentName and role are stored in the session data */
var studentName = "Connor";
var role = studentIndicator;

// End of dummy data

/**
 * The StudentDashboard component is the entire StudentDashboard, which lists all poems available for the student to complete organized by "In Progress", 
 * "Unstarted", and "Incomplete"
 */
class StudentDashboard extends React.Component {

    /**
     * A method to convert what's in the DB to what the gameboard can work with
     * @param {*} lines would be a string of all lines of the poem's content NOT SPLIT
     * @returns A list of the lines of the poem
     */
    convertStringArray(lines){
        var i;
        var individualLine = "";
        var poemLines = [];
        for(i = 0; i < lines.length; i++){
            if(lines[i] == '|' && (i+1) < lines.length && lines[i+1] == '~' && (i+2) < lines.length && lines[i+2] == '|'){
                poemLines.push(individualLine);
                individualLine = "";
                i += 2;
            }
            else{
                individualLine += lines[i];
            }
        }
        poemLines.push(individualLine);
        return poemLines;
    }

    /**
     * A method to convert what's in the DB to what the gameboard can work with
     * @param {*} key would be the current solution lines not split
     * @returns A list of the lines the student has inputted for their answer to the poem so far
     */
    convertString2D(key){
        var i;
        var gameBoard = [];
        var individualKeyLine = "";
        for(i = 0; i < key.length; i++){
            if(key[i] == '|' && (i+1) < key.length && key[i+1] == '*' && (i+2) < key.length && key[i+2] == '|'){
                gameBoard.push(this.convertStringArray(individualKeyLine));
                individualKeyLine = "";
                i += 2;
            }
            else{
                individualKeyLine += key[i];
            }
        }
        gameBoard.push(this.convertStringArray(individualKeyLine));
        return gameBoard;
    }

    /**
     * A method to translate DB information into aesthetic status renderings
     * @param {*} status the item to be translated 
     * @returns the aesthetic translation
     */
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

    /**
     * A method to translate DB information into aesthetic role renderings
     * @param {*} role the item to be translated 
     * @returns the aesthetic translation
     */
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
                            <Link to={{
                                pathname: '/simply-scansion',
                                state: {
                                    poet: poet,
                                    poemName: p,
                                    poemText: allPoems[poet][p].poemText,
                                    key: allPoems[poet][p].key,
                                    currentPoemLines: allPoems[poet][p].lines 
                                }}}
                            className="reactLink" >
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
                            <Link to={{
                                pathname: '/simply-scansion',
                                state: {
                                    poet: poet,
                                    poemName: p,
                                    poemText: allPoems[poet][p].poemText,
                                    key: allPoems[poet][p].key,
                                    currentPoemLines: allPoems[poet][p].lines 
                                }}}
                            className="reactLink" >
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
            <div className = "outer">
                <div className = "inner">
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
                </div>
            </div>
        );
    }
}

export default StudentDashboard;