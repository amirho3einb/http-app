import http from "../../services/httpService";
import { useState } from "react/cjs/react.development";
import "./newComment.css";
const NewComment = ({setComments}) => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        body: "",
    });
    
    // const postCommentHandler = () => {
    //     axios
    //     .post("/comments", comment)
    //     .then((res) => axios.get("/comments"))
    //     .then((res) => setComments(res.data))
    //     .catch()
    // }
    
    const postCommentHandler = async() => {
        try{
            await http
            .post("/comments", comment);
            const {data} = await http.get("/comments");
            setComments(data);
        }
        catch(error){}
    }

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
            <button onClick={postCommentHandler}>Add New Comment</button>
        </div>
    );
}
 
export default NewComment;