import React, {RefObject} from "react";
import classes from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";

type MyPostsPropsType = {
  posts: Array<PostType>
  addPost: (postMessage:string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  let fieldAddPost: RefObject<HTMLTextAreaElement> = React.createRef();

  const AddPost = () => {
    if (fieldAddPost.current?.value) {
      props.addPost(fieldAddPost.current?.value)
    }

  }

  const renderedPosts = props.posts.map(obj => <Post post={obj}/>)

  return (
      <div className={classes.posts}>
        <textarea ref={fieldAddPost}/>
        <button onClick={AddPost}>Add</button>
        {renderedPosts}
      </div>
      )
}

export default MyPosts


