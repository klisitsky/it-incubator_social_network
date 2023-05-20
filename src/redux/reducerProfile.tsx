import {ActionsTypes, profilePageType} from "./store";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";


const ADD_POST = 'addPost'
const CHANGE_MESSAGE_TEXT_POST = 'changeMessageTextPost'

export type ProfileActionsTypes = ReturnType<typeof addPostCreator> |
                                  ReturnType<typeof changeMessageTextPostCreator>

const reducerProfile = (state:profilePageType, action:ActionsTypes) => {
  switch (action.type) {
    case CHANGE_MESSAGE_TEXT_POST:
      state.messageInTextAreaPost = action.messageInTextAreaPost ? action.messageInTextAreaPost : ''
      return state
    case ADD_POST:
      const newPost: PostType = {
        id: v1(),
        photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
        name: "Петя",
        surName: 'Иванов',
        message: state.messageInTextAreaPost
      }
      state.userPosts.push(newPost);
      state.messageInTextAreaPost = ''
      return state
    default:
      return state
  }
}

export const addPostCreator = () => ({
  type: ADD_POST
} as const)

export const changeMessageTextPostCreator = (newMessage: string) => ({
  type: CHANGE_MESSAGE_TEXT_POST,
  messageInTextAreaPost: newMessage
} as const)

export default reducerProfile