import React from "react";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {UserInfo} from "./UserInfo/UserInfo";
import UserPosts from "./UserPosts/UserPosts";


type ProfilePropsType = Omit<ProfileContainerPropsType, 'isFetching' | 'toggleFetching'>;

const Profile: React.FC<ProfilePropsType> = (props) => {

  return (<div>
        <UserInfo isOwner={!!props.match.params.userId}
                  savePhoto={props.setUserPhotoAPI}
                  userInfo={props.userInfo}
                  setUserInfo={props.setUserInfo}
                  userStatus={props.userStatus}
                  updateUserStatusAPI={props.updateUserStatusAPI}


        />
        <UserPosts userPosts={props.userPosts}
                   addPost={props.addPost}

        />
      </div>)
}


export default Profile
