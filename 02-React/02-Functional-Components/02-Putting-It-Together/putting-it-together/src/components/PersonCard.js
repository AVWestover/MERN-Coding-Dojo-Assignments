import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;


    const [count, setCount] = useState(age);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="personDiv">
            <h3 className="personName"> { lastName }, { firstName } </h3>
            <p>Age: { count } </p>
            <p>Hair Color: { hairColor } </p>
            <button onClick={ handleClick }>Birthday Button</button>
        </div>
    );

}
export default PersonCard;