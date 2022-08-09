import React, { useState } from "react";
import classes from "./UI/stylesUI/UIStyle.module.css"; 
import {useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    let navigate = useNavigate();
    return (
        <div>
            <div className="post">
                <div>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__Btn">
                    <button className={classes.buttonClassesOpen} onClick={()=>{navigate(`/posts/${props.post.id}`)}}>Открыть</button>
                    <button className={classes.buttonClassesDel} onClick={() => props.remove(props.post)}>Удалить</button>
                </div>
            </div>
        </div>
    )

}

export default PostItem;