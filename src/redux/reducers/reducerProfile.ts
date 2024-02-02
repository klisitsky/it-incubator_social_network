import {PostType} from "components/Profile/UserPosts/Post/Post";
import {v1} from "uuid";
import {
  ADD_MESSAGE_POST, SET_USER_INFO,
  SET_USER_STATUS, TOGGLE_FETCHING,
  addPost, setUserInfo,
  setUserStatus, toggleFetching, SET_USER_PHOTO, setUserPhotoSuccess
} from "../actions/actionsProfile";


export type ProfileActionsTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof toggleFetching>
  | ReturnType<typeof setUserStatus>
  | ReturnType<typeof setUserPhotoSuccess>

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

type initialStateType = {
  userInfo: UserInfoType
  isFetching: boolean
  userPosts: Array<PostType>
  userStatus: string
}

const initialState: initialStateType = {
  userInfo: {
    userId: 29430,
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
  userStatus: ''
}


const reducerProfile = (state: initialStateType = initialState, action: ProfileActionsTypes): initialStateType => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo
      }

    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.payload.title
      }

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching
      }

    case ADD_MESSAGE_POST:
      const newPost: PostType = {
        id: v1(),
        photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
        name: "Петя",
        surName: 'Иванов',
        message: action.payload.newMessagePost
      }
      return {
        ...state,
        userPosts: [...state.userPosts, newPost]
      }
    case SET_USER_PHOTO:
      return {
        ...state,
        userInfo:
          {
          ...state.userInfo,
          photos:
            {
              ...state.userInfo.photos,
              large: action.payload.newPhotoUrl
            }
        }
      }
    default:
      return state
  }
}


export default reducerProfile