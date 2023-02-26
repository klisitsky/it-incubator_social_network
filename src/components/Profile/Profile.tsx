import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "./MyPosts/Post/Post";

type ProfilePropsType = {
  mainBackgroundProfile: string
  posts: Array<PostType>
  addPost: (postMessage:string) => void
  messageInTextArea: string
  changeMessageText: (newMessage: string) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
      <div>
        <ProfileInfo bg={props.mainBackgroundProfile}/>
        <MyPosts posts={props.posts}
                 addPost={props.addPost}
                 changeMessageText={props.changeMessageText}
                 messageInTextArea={props.messageInTextArea}/>
      </div>
    )
}

type ProfileInfoType = {
  bg: string
}

const ProfileInfo = (props:ProfileInfoType) => {
  return (
    <>
      <div>
        <img src={props.bg} alt="img"/>
      </div>
      <div className={classes.content}>Ava + desc</div>
    </>
  )
}



export default Profile
