import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "./MyPosts/Post/Post";
import {DispatchType} from "../../state";

type ProfilePropsType = {
  mainBackgroundProfile: string
  posts: Array<PostType>
  messageInTextAreaPost: string
  dispatch: (action: DispatchType) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
      <div>
        <ProfileInfo bg={props.mainBackgroundProfile}/>
        <MyPosts posts={props.posts}
                 dispatch={props.dispatch}
                 messageInTextAreaPost={props.messageInTextAreaPost}/>
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
