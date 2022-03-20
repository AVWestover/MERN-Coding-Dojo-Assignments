import React, { useState } from 'react'
import axios from 'axios';
const AuthorForm = (props) => {
    const { authors, setAuthors } = props;
    const [authorName, setAuthorName] = useState("");

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/authors', {
            authorName,    // this is shortcut syntax for authorName: authorName,
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);

                setAuthors([...authors, res.data]);
                setAuthorName("");
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
            })
    }


    return (
        <div>
            <h2>Add an Author</h2>
        <form onSubmit={onSubmitHandler}>
            <div className= "form-input-div">
                <label>Name:</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input
                    onChange = {(e)=> setAuthorName(e.target.value)}
                    value={authorName}
                    name="authorName"
                    type="text"
                />
            </div>
            { errors.authorName ? 
                    <p className="error-text" >{errors.authorName.message}</p>
                    : null
                }
            <br/>
            <input className="product-submit-btn" type="submit" value="Add" />
        </form>
        </div>
    );
};
export default AuthorForm;