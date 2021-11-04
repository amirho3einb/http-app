import { useState } from "react/cjs/react.development";
import "./newComment.css";
const NewComment = ({onAddPost}) => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        body: "",
    });
    /*
    const postCommentHandler = () => {
        axios
        .post("http://localhost:3001/comments", comment)
        .then(res => console.log(res.data))
        .catch()
    }
    */
    const changeHandler = (e) => {
        setComment({...comment, [e.target.name] : e.target.value})
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
            <button onClick={() => onAddPost(comment)}>Add New Comment</button>
        </div>
    );
}
 
export default NewComment;