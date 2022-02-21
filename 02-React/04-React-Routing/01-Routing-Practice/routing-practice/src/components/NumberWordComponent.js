import React from 'react';

const NumberWordComponent = (props) => {

    const { input, tColor, bgColor } = props;

    let isNum = true;
    if(isNaN(+props.input)){
        isNum = false;
    }

    const styling = {
        color: `${tColor}`,
        backgroundColor: `${bgColor}`,
    };


    return (
            isNum ? <div style={ styling }>The number is: {input}</div> : <div style={ styling }>The word is: {input}</div>
    );
}

export default NumberWordComponent;