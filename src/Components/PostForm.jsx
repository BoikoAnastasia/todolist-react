import React, { useState } from "react";

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
            <input type="text" placeholder="Введите название поста"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <input type="text" placeholder="Введите название поста"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })} />
            <button type="submit" onClick={addNewPost}>Добавить</button>
        </form>
    )
}

export default PostForm;