import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const {id} = useParams(); 
    const [oneProduct, setOneProduct] = useState({});

// Reach router creates a key:value pair inside of our props object 
//     for every variable found inside the "path" attribute. 
// For example, the "path" attribute of the Detail component (Code Block 3 - App.js).   
// We can deconstruct the id from props.
// The unique part of our "path" (:id) will have its value 
//    assigned in the Link element's "to" attribute (e.g. Code Block 4)
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => console.log(err) )
    }, [id]);

    return (
        <div>
            <h2 className="product-detailpage-title">{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    );
};

export default Detail;

