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

  return (
      <div className={classes.posts}>
        {props.posts.map(obj => <Post post={obj}/>)}
      </div>
      )
}

export default MyPosts


