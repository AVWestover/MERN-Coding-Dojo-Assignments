import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
const Main = (props) => {
    
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])

    const removeFromDom = authorId => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthors(authors.filter(author=> author._id !== authorId));
        })
        .catch((err)=>console.log(err))
        
    }

    
    return (
        <div>
    	{/* AuthorForm and AuthorList can both utilize the getter and setter established in their parent component: */}
            <AuthorForm authors={authors} setAuthors={setAuthors} />

            <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom} />
        </div>
    );
};
export default Main;