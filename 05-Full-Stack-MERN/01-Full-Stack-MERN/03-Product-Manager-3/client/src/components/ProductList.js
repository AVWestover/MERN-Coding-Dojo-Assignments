import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {removeFromDom, products, setProducts} = props;

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    
    return (
        <div>
            {
                products.map((product, index)=>{
                return (
                    <div className="product-div" key={index}>
                        {/* Clicking this element will assign the "id" param the value of this document's _id field */}
                        <div>
                            <Link to={`/product/${product._id}`} className="product-title-link">
                                {product.title}
                            </Link>
                        </div>
                        <div id="edit-delete-link-div">
                            <Link to={`/product/edit/${product._id}`} className="product-edit-link">
                                Edit
                            </Link>
                            <button className="delete-btn" onClick={(e)=>{deleteProduct(product._id)}}>
                                Delete
                            </button>
                        </div>
                        {/* <p>${product.price}</p>
                        <p>{product.description}</p> */}
                    </div> 
                )})
            }
        </div>
    );
};
export default ProductList;

