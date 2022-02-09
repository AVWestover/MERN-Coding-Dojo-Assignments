import React from 'react';

const Box = (props) => {
    const boxStyle = {
        height: `${props.size}px`,
        width: `${props.size}px`,
        backgroundColor: props.color,
        display: 'inline-block',
        margin: '15px'
    }

    return (
        <div style={boxStyle}></div>
    );

}

export default Box;