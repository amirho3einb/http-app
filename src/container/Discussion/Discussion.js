import { useEffect, useState } from 'react';
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";
import axios from "axios";


const Discussion = () => {
    const [comments, setComments] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    
    // how to get data?
    // 1. useEffect () => http
    // 2. CDM => get
    // 2xx => ok !
    // 301, 302 => redirect ! => SEO
    // 4xx => 401 => unAuthorized , 402, 403 => not Access, 404 => notFound
    // 5x => server
/********* then cach ***********/
    useEffect(()=>{
        const getComments = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:3001/comments"
                );
                setComments(data);
            } catch (error) {
                console.log(error);
            }
        }
        getComments();
    },[]);
    const postCommentHandler = (comment) => {
        axios
        .post("http://localhost:3001/comments", comment)
        .then((res) => axios.get("http://localhost:3001/comments"))
        .then((res) => setComments(res.data))
        .catch()
    }
    
    


    /*********** Async - Await *************/
    /********** regular function *************/
    // async function getComments() {
    //     try {
    //         const { data } = await axios.get(
    //             "https://jsonplaceholder.typicode.com/comments"
    //         );
    //         setComments(data.slice(0 , 4));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    /********** arrow function *************/
    // const getComments = async () => {
    //     try {
    //         const { data } = await axios.get(
    //             "https://jsonplaceholder.typicode.com/comments"
    //         );
    //         setComments(data.slice(0 , 4));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const selectCommentHandler = (id) => {
        setSelectedId(id);
    }
    return ( 
        <main>
            <section>
                {comments ? comments.map(c => <Comment key={c.id} name={c.name} email={c.email} onClick={() => selectCommentHandler(c.id)}/>) : <p>loading ...</p>}
            </section>
            <section><FullComment commentId={selectedId}/></section>
            <section><NewComment onAddPost={postCommentHandler}/></section>
        </main>
    );
}
 
export default Discussion;