import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {addPost, changePostTextArea, setUserInfo, toggleFetching, UserInfoType} from "../../redux/reducerProfile";
import {PostType} from "./UserPosts/Post/Post";
import React from "react";
import Preloader from "../Preloader/Preloader";
import axios from "axios";

export type ProfileContainerPropsType = StatePropsType & DispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    this.props.toggleFetching(true)
    const URL_PATH = `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userInfo.userId}`
    axios.get(URL_PATH).then(response => {
      this.props.setUserInfo(response.data)
      this.props.toggleFetching(false)
    })
  }

  render() {
    const {isFetching, toggleFetching, ...otherProps} = this.props
    return <>
      {isFetching
      ? <Preloader/>
      : <Profile {...otherProps}/>
      }
    </>
  }
}


type StatePropsType = {
  userInfo: UserInfoType
  userPosts: Array<PostType>
  isFetching: boolean
  messageInTextAreaPost: string
}

const mapStateToProps = (state:RootStateType):StatePropsType => ({
  userInfo: state.profilePage.userInfo,
  userPosts: state.profilePage.userPosts,
  isFetching: state.profilePage.isFetching,
  messageInTextAreaPost: state.profilePage.messageInTextAreaPost
})

export type DispatchPropsType = {
  addPost: () => void
  changePostTextArea: (value: string) => void
  setUserInfo: (data: UserInfoType) => void
  toggleFetching: (isFetching: boolean) => void
}



export default React.memo(connect(mapStateToProps, {
  addPost,
  changePostTextArea,
  setUserInfo,
  toggleFetching} as DispatchPropsType)(ProfileContainer))