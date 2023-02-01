import React from "react";
import classes from './Post.module.css';


type PostPropsType = {
  post: PostType
}

type PostType = {
  id: number
  photoUrl: string
  name: string
  surName: string
  message: string
}


const Post: React.FC<PostPropsType> = (props) => {
  return (
        <div key={props.post.id} className={classes.post}>
          <img alt="photoProfile" className={classes.avatar} src={props.post.photoUrl}/>
          <span className={classes.userName}>{`${props.post.name} ${props.post.surName}`}</span>
          <div className={classes.message}>{props.post.message}</div>
        </div>
      )
}

export default Post

