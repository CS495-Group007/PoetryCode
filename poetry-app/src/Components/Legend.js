import React from "react";

const Legend = props => {
    return (
        <div className="legend-box">
            <div className="popup">
                <span className="close-icon" onClick={props.handleClass}>x</span>
                {props.content}
            </div>
        </div>
    );
};

export default Legend;