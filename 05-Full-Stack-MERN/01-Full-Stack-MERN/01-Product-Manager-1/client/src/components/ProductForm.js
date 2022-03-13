import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description      // this is shortcut syntax for description: description
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);

                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <h2>Create A Product</h2>
            </div>
            <div className= "form-input-div">
                <label>Title:</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input
                    onChange = {(e)=>setTitle(e.target.value)}
                    value={title}
                    name="title"
                    type="text"
                />
            </div>
            <div className= "form-input-div">
                <label>Price:</label><br/>
                <input
                    onChange = {(e)=>setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"
                />
            </div>
            <div className= "form-input-div">
                <label>Description:</label><br/>
                <input
                    onChange = {(e)=>setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                />
            </div>
            <input className="product-submit-btn" type="submit"/>
        </form>
    )
}
export default ProductForm;

