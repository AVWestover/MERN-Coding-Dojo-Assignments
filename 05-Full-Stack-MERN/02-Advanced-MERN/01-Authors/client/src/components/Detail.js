import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const {id} = useParams(); 
    const [oneAuthor, setOneAuthor] = useState({});

// Reach router creates a key:value pair inside of our props object 
//     for every variable found inside the "path" attribute. 
// For example, the "path" attribute of the Detail component (Code Block 3 - App.js).   
// We can deconstruct the id from props.
// The unique part of our "path" (:id) will have its value 
//    assigned in the Link element's "to" attribute (e.g. Code Block 4)
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneAuthor(res.data);
            })
            .catch((err) => console.log(err) )
    }, [id]);

    return (
        <div>
            <h2 className="product-detailpage-title">{oneAuthor.authorName}</h2>
            <p>Author's Name: {oneAuthor.authorName}</p>
        </div>
    );
};

export default Detail;

