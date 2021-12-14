import { useEffect, useState } from 'react';
import Comment from "./Comment/Comment";
import FullComment from "../../pages/FullComment/FullComment";
import NewComment from "../../pages/NewComment/NewComment";
import "./comments.css";
import { getALLComments } from '../../services/getAllCommentsService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const CommentsList = () => {
    const [comments, setComments] = useState(null);
    //const [selectedId, setSelectedId] = useState(null);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        const getComments = async () => {
            try {
                const { data } = await getALLComments();
                setComments(data);
            } catch (error) {
                setError(true);
            }
        }
        getComments();
    },[]);

    // const selectCommentHandler = (id) => {
    //     setSelectedId(id);
    // }
    const renderComments = () => {
        let renderValue = <p>loading ...</p>;
        if(error){
            renderValue = <p>fetching data failed !</p>;
            toast.error('there is an error')
        }
        if(comments && !error){
            renderValue = comments.map(c => (
                <Link to={`/comment/${c.id}`} key={c.id}>
                    <Comment 
                        key={c.id} 
                        name={c.name} 
                        email={c.email} 
                        // onClick={() => selectCommentHandler(c.id)}
                    />
                </Link>
            ));
        }
        return renderValue;
    }
    return ( 
        <section>
            {renderComments()}
        </section>
    );
}
 
export default CommentsList;