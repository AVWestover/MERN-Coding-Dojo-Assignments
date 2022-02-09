import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [fnameError, setFNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lnameError, setLNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const handleFName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFNameError("First name must be at least 2 characters");
        } else {
            // an empty string is considered a "falsy" value
            setFNameError("");
        }
    }

    const handleLName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLNameError("Last name must be at least 2 characters");
        } else {
            // an empty string is considered a "falsy" value
            setLNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }



    
    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFName } />
                    {
                        fnameError ?
                        <p className="error-text">{ fnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLName } />
                    {
                        lnameError ?
                        <p className="error-text">{ lnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p className="error-text">{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <>
                            <p className="error-text">{ passwordError }</p>
                            <p className="error-text">Passwords must match</p>
                        </>
                        :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={confPassword} onChange={ (e) => setConfPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>

        </div>
    );
};
    
export default UserForm;
