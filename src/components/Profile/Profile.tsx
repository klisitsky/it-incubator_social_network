import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
  mainBackgroundProfile: string
  posts: Array<PostType>
}

type PostType = {
  id: number
  photoUrl: string
  name: string
  surName: string
  message: string
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  return <div className={classes.content}>
    <div>
      <img src={props.mainBackgroundProfile}
           alt="img"/>
    </div>
    <div className={classes.content}>Ava + desc</div>
    <div className={classes.content}>My posts</div>
    <div className={classes.content}>New posts</div>
    <MyPosts posts={props.posts}/>
  </div>
}

export default Profile
