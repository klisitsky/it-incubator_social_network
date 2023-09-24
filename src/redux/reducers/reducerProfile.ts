import {PostType} from "../../components/Profile/UserPosts/Post/Post";
import {v1} from "uuid";
import {
  ADD_POST,
  addPost,
  CHANGE_MESSAGE_TEXT_POST,
  changePostTextArea,
  SET_USER_INFO, SET_USER_STATUS, setUserInfo, setUserStatus,
  TOGGLE_FETCHING, toggleFetching
} from "../actions/actionsProfile";



export type ProfileActionsTypes = ReturnType<typeof addPost>
  | ReturnType<typeof changePostTextArea>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof toggleFetching>
  | ReturnType<typeof setUserStatus>

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
  messageInTextAreaPost: string
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
    messageInTextAreaPost: '',
    userStatus: ''
}


const reducerProfile = (state:initialStateType = initialState, action:ProfileActionsTypes): initialStateType => {
  switch (action.type) {
    case SET_USER_INFO:
      return {...state,
        userInfo: action.payload.userInfo
      }

    case SET_USER_STATUS:
      console.log(action.payload.title, 'action.payload.title')
      return {...state,
        userStatus: action.payload.title
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



export default reducerProfile