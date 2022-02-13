import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {  
  let postsEl = props.posts.map ( posts  => 
    <Post message={posts.message} likesCount={posts.likesCount}/>);
  
  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();         
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
    
  return (
      <div className={s.myPosts}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={ newPostElement } 
                    value={props.newPostText} />
          </div>
          <div>
            <button onClick={ onAddPost }>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
            {postsEl}
        </div>
      </div>
      
    );
  }
  
  export default MyPosts;