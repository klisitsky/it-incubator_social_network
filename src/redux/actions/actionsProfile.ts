import {UserInfoType} from "../reducers/reducerProfile";

export const ADD_MESSAGE_POST = 'profile/ADD_MESSAGE_POST'
export const SET_USER_INFO = 'profile/SET_USER_INFO'
export const SET_USER_STATUS = 'profile/SET_USER_STATUS'
export const TOGGLE_FETCHING = 'profile/TOGGLE_FETCHING'
export const SET_USER_PHOTO = 'profile/SET_USER_PHOTO'




export const addPost = (newMessagePost: string) => ({
  type: ADD_MESSAGE_POST,
  payload: {
    newMessagePost
  }
} as const)

export const setUserInfo = (userInfo: UserInfoType) => ({
  type: SET_USER_INFO,
  payload: {
    userInfo
  }
} as const)

export const toggleFetching = (isFetching: boolean) => ({
  type: TOGGLE_FETCHING,
  payload: {
    isFetching
  }
} as const)

export const setUserStatus = (title: string) => ({
  type: SET_USER_STATUS,
  payload: {
    title
  }
} as const)



export const setUserPhotoSuccess = (newPhotoUrl: string) => ({
  type: SET_USER_PHOTO,
  payload: {
    newPhotoUrl
  }
} as const)