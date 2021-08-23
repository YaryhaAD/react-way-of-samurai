import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    debugger;
    return (

        <div className={s.item}>
            <img src="http://archilab.online/images/1/123.jpg" alt="" />
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>

    );
}

export default Post;