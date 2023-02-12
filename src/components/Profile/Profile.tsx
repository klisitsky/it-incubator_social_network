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



const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
      <div>
        <ProfileInfo bg={props.mainBackgroundProfile}/>
        <MyPosts posts={props.posts}/>
      </div>
    )
}

export default Profile
