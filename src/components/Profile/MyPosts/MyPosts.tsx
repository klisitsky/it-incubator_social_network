import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";

type MyPostsPropsType = {
  posts: Array<PostType>
  addPost: (postMessage:string) => void
  changeMessageText: (newMessage: string) => void
  messageInTextArea: string
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  const AddPostHandler = () => {
    if (props.messageInTextArea)
      props.addPost(props.messageInTextArea)
      props.changeMessageText('')
  }

  const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeMessageText(event.currentTarget.value)
  }

  const renderedPosts = props.posts.map(obj => <Post key={obj.id} post={obj}/>)

  return (
      <div className={classes.posts}>
        <textarea value={props.messageInTextArea} onChange={onChangeTextAreaHandler}/>
        <button onClick={AddPostHandler}>Add</button>
        {renderedPosts}
      </div>
      )
}

export default MyPosts


