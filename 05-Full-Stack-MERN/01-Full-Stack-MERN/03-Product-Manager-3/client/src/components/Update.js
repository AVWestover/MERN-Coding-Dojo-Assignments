import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    //prevent header from changing with typing
    const [headerTitle, setHeaderTitle] = useState("");
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setHeaderTitle(res.data.title);
            })
            .catch((err) => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price,
            description  //shorthand for description: description
        })
            .then((res) => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <h2>Edit {headerTitle}</h2>
            <form onSubmit={updateProduct}>
            <div className= "form-input-div">
                <label>Title:</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input
                    onChange = {(e)=> setTitle(e.target.value)}
                    value={title}
                    name="title"
                    type="text"
                />
            </div>
            <br/>
            <div className= "form-input-div">
                <label>Price:</label>
                <input
                    onChange = {(e)=> setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"
                />
            </div>
            <br/>
            <div className= "form-input-div">
                <label>Description:</label>
                <input
                    onChange = {(e)=> setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                />
            </div>
            <br/>
            <input className="product-submit-btn" type="submit" value="Update" />
        </form>
        </div>
    );
};
export default Update;

