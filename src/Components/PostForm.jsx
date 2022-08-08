import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        // можно добавить всплывающее окошко
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: " " });
    }

    return (
        <form>
            <MyInput type="text" placeholder="Введите название поста"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                style={{marginBottom: "10px"}}
            />
            <MyInput type="text" placeholder="Введите описание поста"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })} />
            <MyButton type="submit" onClick={addNewPost} style={{margin: "10px 0px 0px 38%"}}>Добавить</MyButton>
        </form>
    )
}

export default PostForm;