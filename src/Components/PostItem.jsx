import React, { useState } from "react";
import Button_list from "./UI/Button_list";

const PostItem = (props) => {

    return (
        <div>
            <div className="post">
                <div>
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>{props.post.body}</div>

                </div>
                <div>
                    <button onClick={() => props.remove(props.post)}>Удалить</button>
                </div>
            </div>
        </div>
    )

}

export default PostItem;