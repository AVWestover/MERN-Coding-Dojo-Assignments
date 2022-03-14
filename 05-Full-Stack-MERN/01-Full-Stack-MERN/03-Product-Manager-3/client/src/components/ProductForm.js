import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    //product prop + useState
    const {products, setProducts} = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description,      // this is shortcut syntax for description: description
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);

                setProducts([...products, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <h2>Create A Product</h2>
        <form onSubmit={onSubmitHandler}>
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
            <input className="product-submit-btn" type="submit" value="Create" />
        </form>
        </div>
    );
};
export default ProductForm;

