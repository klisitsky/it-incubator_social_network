import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {UserInfoType} from "../../redux/reducers/reducerProfile";
import {PostType} from "./UserPosts/Post/Post";
import React, {ComponentType} from "react";
import Preloader from "../Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {addPost, setUserInfo, toggleFetching} from "../../redux/actions/actionsProfile";
import {getUserInfoAPI, getUserStatusAPI, updateUserStatusAPI} from "../../redux/thunks/thunksProfile";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  getAuthorizedUserId, getIsAuth,
  getIsFetching,
  getUserInfo,
  getUserPosts,
  getUserStatus
} from "../../redux/selectors/selectorsProfile";


type Params = { userId: string }

export type ProfileContainerPropsType = StatePropsType & DispatchPropsType & RouteComponentProps<Params>


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId ? this.props.authorizedUserId.toString() : ''
    }
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
  userStatus: string
  authorizedUserId: number | null
  isAuth: boolean
}

const mapStateToProps = (state: RootStateType): StatePropsType => ({
  userInfo: getUserInfo(state),
  userPosts: getUserPosts(state),
  isFetching: getIsFetching(state),
  userStatus: getUserStatus(state),
  authorizedUserId: getAuthorizedUserId(state),
  isAuth: getIsAuth(state)
})

export type DispatchPropsType = {
  addPost: (newMessagePost: string) => void
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
    setUserInfo,
    toggleFetching,
    getUserInfoAPI,
    getUserStatusAPI,
    updateUserStatusAPI
  } as DispatchPropsType),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)