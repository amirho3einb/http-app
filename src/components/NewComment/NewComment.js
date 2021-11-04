import axios from "axios";
import { useState } from "react/cjs/react.development";
import "./newComment.css";
const NewComment = () => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        content: "",
    });
    const changeHandler = (e) => {
        setComment({...comment, [e.target.name] : e.target.value})
    }
    const postCommentHandler = () => {
        axios
        .post("https://jsonplaceholder.typicode.com/comments", comment)
        .then(res => console.log(res.data))
        .catch()
    }
    return ( 
        <div className="newComment">
            <div>
                <label>name:</label>
                <input type="text" name="name" onChange={changeHandler} value={comment.name}/>
            </div>
            <div>
                <label>email:</label>
                <input type="email" name="email" onChange={changeHandler} value={comment.email}/>
            </div>
            <div>
                <label>body:</label>
                <input type="text" name="content" onChange={changeHandler} value={comment.content}/>
            </div>
            <button onClick={postCommentHandler}>Add New Comment</button>
        </div>
    );
}
 
export default NewComment;