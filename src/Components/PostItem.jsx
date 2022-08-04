import React from "react";

const PostItem = (props) => {
    return (
        <div>
        <div className="post">  
            <div>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
                
            </div>
            <div>
                <button>Удалить</button>
            </div>
        </div>
        </div>
    )

}

export default PostItem;