import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom";
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {
    const { id } = useParams();
    // const [errors, setErrors] = useState({});
    const [authorName, setAuthorName] = useState("");
    const [author, setAuthor] = useState("");
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data);
                setAuthorName(res.data.authorName);
                setLoaded(true);
            })
            .catch((err) => console.log(err))
    }, [id]);
    const updateSubmitHandler = (e) => {
        e.preventDefault();
        const putUpdateData = {
            authorName,
        };
        axios
            .put(`http://localhost:8000/api/authors/${id}`, putUpdateData)
            .then((res) => {
                console.log(res.data);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <h2>Edit Author:</h2>
            <div>
                <form onSubmit={updateSubmitHandler}>
                    <div className= "form-input-div">
                        <label>Author Name:</label>
                        <input
                        onChange = {(e)=> setAuthorName(e.target.value)}
                        value={authorName}
                        name="authorName"
                        type="text"
                        />
                    </div>
                    <br/>
                    <input className="product-submit-btn" type="submit" value="Update" />
                    <br/>
                    <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
                </form>
            </div>
            {/* {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateSubmitHandler}
                        initialAuthorName={author.authorName}
                    /> */}
                    {/* <DeleteButton authorId={author._id} successCallback={() => navigate("/")} />
                </> */}
            {/* )} */}
        </div>
    );
};
export default Update;

