import {UserInfoType} from "../reducers/reducerProfile";

export const ADD_POST = 'ADD_POST'
export const CHANGE_MESSAGE_TEXT_POST = 'CHANGE_MESSAGE_TEXT_POST'
export const SET_USER_INFO = 'SET_USER_INFO'
export const TOGGLE_FETCHING = 'TOGGLE_FETCHING'


export const addPost = () => ({
  type: ADD_POST
} as const)

export const changePostTextArea = (newMessage: string) => ({
  type: CHANGE_MESSAGE_TEXT_POST,
  payload: {
    newMessage
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