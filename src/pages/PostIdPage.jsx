import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    });
    const [fetchComment, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data);
    });
    useEffect(() => {
        fetchPostById(params.id)
        fetchComment(params.id)
    }, [])
    return (
        <div>
            <h1>Страница пользователя ID={params.id}</h1>
            {isLoading
                ? <Loader />
                : <div> {post.id}. {post.title}</div>
            }
            <h2>Комментарии</h2>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>

            }

        </div>
    )
}

export default PostIdPage;