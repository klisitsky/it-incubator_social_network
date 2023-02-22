import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsPropsType = {
  posts: Array<PostType>
}

type PostType = {
  id: number
  photoUrl: string
  name: string
  surName: string
  message: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  const renderedPosts = props.posts.map(obj => <Post post={obj}/>)

  return (
      <div className={classes.posts}>
        {renderedPosts}
      </div>
      )
}

export default MyPosts


