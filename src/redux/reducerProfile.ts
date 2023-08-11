import {PostType} from "../components/Profile/UserPosts/Post/Post";
import {v1} from "uuid";


const ADD_POST = 'ADD_POST'
const CHANGE_MESSAGE_TEXT_POST = 'CHANGE_MESSAGE_TEXT_POST'
const SET_USER_INFO = 'SET_USER_INFO'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

export type ProfileActionsTypes = ReturnType<typeof addPost>
  | ReturnType<typeof changePostTextArea>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof toggleFetching>

export type UserInfoType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  },
  photos: {
    small: string
    large: string
  }
}

export type profilePageType = {
  userInfo: UserInfoType
  isFetching: boolean
  messageInTextAreaPost: string
  userPosts: Array<PostType>
}

const initialState: profilePageType = {
    userInfo: {
      userId: 2,
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: '',
      aboutMe: '',
      contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: ''
      },
      photos: {
        small: '',
        large: ''
      }
    },
    isFetching: false,
    userPosts: [
    {
      id: v1(),
      photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
      name: "Петя",
      surName: 'Иванов',
      message: 'Вау! Мой первый пост'
    },
    {
      id: v1(),
      photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
      name: "Петя",
      surName: 'Иванов',
      message: 'А тут теперь второй!'
    },
    {
      id: v1(),
      photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
      name: "Петя",
      surName: 'Иванов',
      message: 'Только сидел и писал бы эти посты'
    }
  ],
    messageInTextAreaPost: '',
}


const reducerProfile = (state:profilePageType = initialState, action:ProfileActionsTypes) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {...state,
        userInfo: action.payload.userInfo
      }

    case TOGGLE_FETCHING:
      return {...state,
        isFetching: action.payload.isFetching
      }

    case CHANGE_MESSAGE_TEXT_POST:
      return {...state,
        messageInTextAreaPost: action.payload.newMessage ? action.payload.newMessage : ''
      }

    case ADD_POST:
      const newPost: PostType = {
        id: v1(),
        photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
        name: "Петя",
        surName: 'Иванов',
        message: state.messageInTextAreaPost
      }
      return {
        ...state,
        userPosts: [...state.userPosts, newPost],
        messageInTextAreaPost: ''
      }
    default:
      return state
  }
}

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

export default reducerProfile