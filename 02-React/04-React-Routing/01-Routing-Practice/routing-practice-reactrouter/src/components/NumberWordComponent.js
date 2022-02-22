import React from 'react';
import { useParams } from 'react-router-dom';

const NumberWordComponent = (props)=>{

    const {word, color, bgCol} = useParams();

    return(
        <div>

            {
                //This method returns a boolean based on whether the argument is a number
                isNaN(word)?  //If word param isn't a number:
                <p style={
                    //If color param exists, then style this element with the values passed in
                    color? 
                    {color: color, backgroundColor: bgCol}
                    :null
                }>
                    This is a word: {word}
                </p>
                : //If the word param IS a number:
                <p>
                    This is a number: {word}
                </p>
            }

        </div>
    )
}


export default NumberWordComponent;