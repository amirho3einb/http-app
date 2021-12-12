import http from "../../services/httpService";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./fullComment.css";
import { deleteComment } from "../../services/deleteCommentService";
import { getALLComments } from "../../services/getAllCommentsService";
import { getOneComment } from "../../services/getOneCommentService";

const FullComment = ({ setComments, setSelectedId, match}) => {
    //console.log(match.params.id);
    const commentId = match.params.id;
    const [comment, setComment] = useState(null);
    console.log(commentId);
    const styles = {
        color: "#444",
        backgroundColor : "#ededed",
        padding: "10px"
    }

    useEffect(()=>{
        if(commentId){
            getOneComment(commentId)
            .then(res => setComment(res.data))
            .catch();
        }
    },[commentId]);
    
    // const deleteHandler = () => {
    //     axios.delete(`/comments/${commentId}`)
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log(err));
    // };

    const deleteHandler = async() => {
        try{
            await deleteComment(commentId);
            const {data} = await getALLComments();
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