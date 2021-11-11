import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./fullComment.css";
const FullComment = ({commentId, setComments, setSelectedId}) => {
    const [comment, setComment] = useState(null);
    console.log(commentId);
    const styles = {
        color: "#444",
        backgroundColor : "#ededed",
        padding: "10px"
    }

    useEffect(()=>{
        if(commentId){
            axios.get(`http://localhost:3001/comments/${commentId}`)
            .then(res => setComment(res.data))
            .catch();
        }
    },[commentId]);
    
    // const deleteHandler = () => {
    //     axios.delete(`http://localhost:3001/comments/${commentId}`)
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log(err));
    // };

    const deleteHandler = async() => {
        try{
            await axios.delete(`http://localhost:3001/comments/${commentId}`);
            const {data} = await axios.get("http://localhost:3001/comments");
            setComments(data);
            setComment(null);
            setSelectedId(null);
        }
        catch(error){}
    };
    let commentDetail = <p> please select a comment</p>;

    if(commentId) commentDetail =  <p style={styles}>loading ...</p>;

    if(comment){
        commentDetail = (
            <div className="fullComment">
                <p>name: {comment.name}</p>
                <p>email: {comment.email}</p>
                <p>{comment.body}</p>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        );
    }
    return commentDetail;
}
 
export default FullComment;