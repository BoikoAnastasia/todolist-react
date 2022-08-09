import React, { useState } from "react";
import classes from "./UI/stylesUI/UIStyle.module.css"; 

const PostItem = (props) => {

    return (
        <div>
            <div className="post">
                <div>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__Btn">
                    <button className={classes.buttonClassesOpen} >Открыть</button>
                    <button className={classes.buttonClassesDel} onClick={() => props.remove(props.post)}>Удалить</button>
                </div>
            </div>
        </div>
    )

}

export default PostItem;