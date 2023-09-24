import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {UserInfoType} from "../../redux/reducers/reducerProfile";
import {PostType} from "./UserPosts/Post/Post";
import React, {ComponentType} from "react";
import Preloader from "../Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {addPost, changePostTextArea, setUserInfo, toggleFetching} from "../../redux/actions/actionsProfile";
import {getUserInfoAPI, getUserStatusAPI, updateUserStatusAPI} from "../../redux/thunks/thunksProfile";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type Params = { userId: string }

export type ProfileContainerPropsType = StatePropsType & DispatchPropsType & RouteComponentProps<Params>


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = '29430'
    this.props.getUserInfoAPI(userId)
    this.props.getUserStatusAPI(userId)
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
  userStatus: string
}

const mapStateToProps = (state: RootStateType): StatePropsType => ({
  userInfo: state.profilePage.userInfo,
  userPosts: state.profilePage.userPosts,
  isFetching: state.profilePage.isFetching,
  messageInTextAreaPost: state.profilePage.messageInTextAreaPost,
  userStatus: state.profilePage.userStatus
})

export type DispatchPropsType = {
  addPost: () => void
  changePostTextArea: (value: string) => void
  setUserInfo: (data: UserInfoType) => void
  toggleFetching: (isFetching: boolean) => void
  getUserInfoAPI: any
  getUserStatusAPI: any
  updateUserStatusAPI: any
}

export default compose<ComponentType>(
  React.memo,
  connect(mapStateToProps, {
    addPost,
    changePostTextArea,
    setUserInfo,
    toggleFetching,
    getUserInfoAPI,
    getUserStatusAPI,
    updateUserStatusAPI
  } as DispatchPropsType),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)