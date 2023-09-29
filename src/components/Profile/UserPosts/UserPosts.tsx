import React from "react";
import classes from './UserPosts.module.css';
import Post, {PostType} from "./Post/Post";
import AddPostForm, {PostMessageFormDataType} from "../../forms/PostMessageForm";

type MyPostsPropsType = {
  userPosts: Array<PostType>
  addPost: (newMessagePost: string) => void
}

const UserPosts: React.FC<MyPostsPropsType> = (props) => {

  const renderedPosts = props.userPosts.map(obj => <Post key={obj.id} post={obj}/>)

  const onSubmitHandler = (formData: PostMessageFormDataType) => {
    props.addPost(formData.messagePost)
  }

  return (
      <div className={classes.posts}>
        <AddPostForm onSubmit={onSubmitHandler}/>
        {renderedPosts}
      </div>
      )
}

export default UserPosts


