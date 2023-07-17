import React, {ChangeEvent} from "react";
import classes from './UserPosts.module.css';
import Post, {PostType} from "./Post/Post";

type MyPostsPropsType = {
  userPosts: Array<PostType>
  messageInTextAreaPost: string
  addPost: () => void
  changePostTextArea: (value: string) => void
}

const UserPosts: React.FC<MyPostsPropsType> = (props) => {

  const renderedPosts = props.userPosts.map(obj => <Post key={obj.id} post={obj}/>)

  const onChangePostTextAreaHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
    props.changePostTextArea(event.currentTarget.value)
  }

  return (
      <div className={classes.posts}>
        <textarea value={props.messageInTextAreaPost} onChange={onChangePostTextAreaHandler}/>
        <button onClick={props.addPost}>Add</button>
        {renderedPosts}
      </div>
      )
}

export default UserPosts


