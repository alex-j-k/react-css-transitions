import React from 'react';


const AddComponentButton = ({handleClick}) => {
    return (  
        <button className="addcomponentbutton" onClick={handleClick}>
            ADD COMPONENTS
        </button>
    );
}
 
export default AddComponentButton;