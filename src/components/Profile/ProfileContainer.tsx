import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {addPost, changePostTextArea, setUserInfo, toggleFetching, UserInfoType} from "../../redux/reducerProfile";
import {PostType} from "./UserPosts/Post/Post";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

type Params = { userId: string }

export type ProfileContainerPropsType = StatePropsType & DispatchPropsType & RouteComponentProps<Params>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = '2'
    this.props.toggleFetching(true)
    profileAPI.getUserInfo(userId).then(data => {
      this.props.setUserInfo(data)
      this.props.toggleFetching(false)
    })
  }

  render() {
    const {isFetching, ...otherProps} = this.props
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

const ProfileContainerWithUrl = withRouter(ProfileContainer)

export default React.memo(connect(mapStateToProps, {
  addPost,
  changePostTextArea,
  setUserInfo,
  toggleFetching} as DispatchPropsType)(ProfileContainerWithUrl))