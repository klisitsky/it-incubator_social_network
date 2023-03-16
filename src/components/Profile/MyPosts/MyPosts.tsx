import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";
import {addPostCreator, changeMessageTextPostCreator, DispatchType} from "../../../state";

type MyPostsPropsType = {
  posts: Array<PostType>
  dispatch: (action: DispatchType) => void
  messageInTextAreaPost: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  const AddPostHandler = () => {
    if (props.messageInTextAreaPost) {
      const AddPostAction = addPostCreator();
      const changeMessageTextAction = changeMessageTextPostCreator('');

      props.dispatch(AddPostAction)
      props.dispatch(changeMessageTextAction)
    }
  }

  const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const changeMessageTextAction = changeMessageTextPostCreator(event.currentTarget.value);
    props.dispatch(changeMessageTextAction)
  }

  const renderedPosts = props.posts.map(obj => <Post key={obj.id} post={obj}/>)

  return (
      <div className={classes.posts}>
        <textarea value={props.messageInTextAreaPost} onChange={onChangeTextAreaHandler}/>
        <button onClick={AddPostHandler}>Add</button>
        {renderedPosts}
      </div>
      )
}

export default MyPosts


