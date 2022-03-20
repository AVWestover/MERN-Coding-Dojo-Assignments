import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import DeleteButton from './DeleteButton';
const AuthorList = (props) => {
    const {authors, setAuthors} = props;
    // const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then((res)=>{
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }


    return (
        <div>
            {authors.map((author, index) => {
                return (
                    <div className="product-div" key={index}>
                        <div>
                            <Link to={`/authors/${author._id}`} className="product-title-link">
                                {author.authorName}
                            </Link>
                        </div>
                        <div id="edit-delete-link-div">
                            <Link to={`/authors/edit/${author._id}`} className="product-edit-link">
                                Edit
                            </Link>
                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)} className="delete-btn"/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
export default AuthorList;