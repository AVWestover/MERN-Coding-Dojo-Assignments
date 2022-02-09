import React from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;

    return (
        <div className="personDiv">
            <h3 className="personName"> { lastName }, { firstName } </h3>
            <p>Age: { age } </p>
            <p>Hair Color: { hairColor } </p>
        </div>
    );

}
export default PersonCard;