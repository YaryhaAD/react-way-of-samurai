import React from 'react';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {


    let postsElements = props.posts.map(p => {
        return (<Post message={p.message} likesCount={p.likesCount} />)
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        let action = UpdateNewPostTextActionCreator(text);
        props.dispatch(action);
        // props.dispatch(action)

    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="5" onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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