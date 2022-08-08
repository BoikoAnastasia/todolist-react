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
                <div>
                    <button className={classes.buttonClasses} onClick={() => props.remove(props.post)}>Удалить</button>
                </div>
            </div>
        </div>
    )

}

export default PostItem;