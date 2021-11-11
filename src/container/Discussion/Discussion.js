import { useEffect, useState } from 'react';
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";
import http from '../../services/httpService';
import { toast } from 'react-toastify';


const Discussion = () => {
    const [comments, setComments] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        const getComments = async () => {
            try {
                const { data } = await http.get(
                    "/comments"
                );
                setComments(data);
            } catch (error) {
                setError(true);
            }
        }
        getComments();
    },[]);

    const selectCommentHandler = (id) => {
        setSelectedId(id);
    }
    const renderComments = () => {
        let renderValue = <p>loading ...</p>;
        if(error){
            renderValue = <p>fetching data failed !</p>;
            toast.error('there is an error')
        }
        if(comments && !error){
            renderValue = comments.map(c => <Comment key={c.id} name={c.name} email={c.email} onClick={() => selectCommentHandler(c.id)}/>)
        }
        return renderValue;
    }
    return ( 
        <main>
            <section>
                {renderComments()}
            </section>
            <section><FullComment commentId={selectedId} setComments={setComments} setSelectedId={setSelectedId}/></section>
            <section><NewComment setComments={setComments}/></section>
        </main>
    );
}
 
export default Discussion;