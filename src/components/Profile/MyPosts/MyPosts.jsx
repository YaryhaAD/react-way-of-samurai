import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {


    let postsElements = props.posts.map(p => {return (<Post message={p.message} likesCount={p.likesCount} />)
    })

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="5" onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
                {/* <Post message={Posts[0].message} likesCount={Posts[0].likesCount} />
                <Post message={Posts[1].message} likesCount={Posts[1].likesCount} /> */}
            </div>
        </div>
    );
}

export default MyPosts;