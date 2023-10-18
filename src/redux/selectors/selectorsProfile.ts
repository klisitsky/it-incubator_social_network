import {createSelector} from "reselect";
import {RootStateType} from "../redux-store";
import {UserInfoType} from "../reducers/reducerProfile";
import {PostType} from "../../components/Profile/UserPosts/Post/Post";

const getUserInfoHandler = (state: RootStateType) => state.profilePage.userInfo
export const getUserInfo = createSelector(getUserInfoHandler, (userInfo: UserInfoType) => userInfo)

const getUserPostsHandler = (state: RootStateType) => state.profilePage.userPosts
export const getUserPosts = createSelector(getUserPostsHandler, (userPosts: PostType[]) => userPosts)

const getIsFetchingHandler = (state: RootStateType) => state.profilePage.isFetching
export const getIsFetching = createSelector(getIsFetchingHandler, (isFetching: boolean) => isFetching)

const getUserStatusHandler = (state: RootStateType) => state.profilePage.userStatus
export const getUserStatus = createSelector(getUserStatusHandler, (userStatus: string) => userStatus)

const getAuthorizedUserIdHandler = (state: RootStateType) => state.auth.data.id
export const getAuthorizedUserId = createSelector(getAuthorizedUserIdHandler, (id: number | null) => id)

const getIsAuthHandler = (state: RootStateType) => state.auth.isAuth
export const getIsAuth = createSelector(getIsAuthHandler, (isAuth: boolean) => isAuth)
