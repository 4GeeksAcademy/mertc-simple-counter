import React from "react";
 
const ClockCard = ({ children }) => {
    return (

        <div className = "ClockCard d-flex justify-content-center align-items-center" >
             {children}
        </div>
    );
}

export default ClockCard;