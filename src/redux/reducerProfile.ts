import {ActionsTypes} from "./redux-store";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";


const ADD_POST = 'addPost'
const CHANGE_MESSAGE_TEXT_POST = 'changeMessageTextPost'

export type ProfileActionsTypes = ReturnType<typeof addPost> |
                                  ReturnType<typeof changePostTextArea>


export type profilePageType = {
  mainLogoSite: string
  mainBackgroundProfile: string
  messageInTextAreaPost: string
  userPosts: Array<PostType>
}

const initialState: profilePageType = {
    mainLogoSite: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png',
    mainBackgroundProfile: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/08/What_is_an_Infographic_Blog_Header.png",
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


const reducerProfile = (state:profilePageType = initialState, action:ActionsTypes) => {
  switch (action.type) {
    case CHANGE_MESSAGE_TEXT_POST:
      return {...state, messageInTextAreaPost: action.messageInTextAreaPost ? action.messageInTextAreaPost : ''}
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
  messageInTextAreaPost: newMessage
} as const)

export default reducerProfile