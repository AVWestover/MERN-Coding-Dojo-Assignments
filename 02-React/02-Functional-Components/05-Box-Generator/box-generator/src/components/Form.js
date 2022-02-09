import React from 'react';

const Form = (props) => {
    const { boxDetails, setBoxDetails} = props;
    const { boxes, setBoxes } = props;

    const onChange = (e) => {
        setBoxDetails({
        ...boxDetails,
        [e.target.name]: e.target.value,
        })
    }

    const createBox = (e) => {
        e.preventDefault();
        setBoxes(boxes => [...boxes, {"color": boxDetails.color, "size": boxDetails.size}]);
    }

    return (
        <form onSubmit={createBox}>
            <div>
                <label htmlFor="color">Color</label>
                <input onChange={ onChange } type="text" name="color" />
                <label htmlFor="size">Size</label>
                <input onChange={ onChange } type="text" name="size" />
                <button value="color">Add</button>
            </div>
        </form>
    );

}

export default Form;