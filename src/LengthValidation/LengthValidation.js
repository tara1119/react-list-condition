import React from 'react';

const lengthValidation = (props) => {

    const textMinimumLength = 5;
    let textLengthMessage = "The Message Length is fine";
    if(props.length <= textMinimumLength) {
        textLengthMessage = (
            <div>The Message Length is too short</div>
        );
    }
   
    return (
        <div>
        <p>Length of the Input Text is: {props.length}</p>
        {textLengthMessage}
        </div>
    );
}

export default lengthValidation;