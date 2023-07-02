import {ActionsTypes} from "./redux-store";


const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"

export type UsersSearchActionsTypes = ReturnType<typeof followAC> |
                                      ReturnType<typeof setUsersAC>

export type UserType = {
  id: number,
  name: string,
  status: string,
  photoURL: string,
  location: {
    country: string,
    city: string
  },
  followed: boolean
}

const initialState:Array<UserType> = [
  {
    id: 1,
    name: 'Дмитрий',
    status: 'Yo bro',
    photoURL: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
    location: {
      country: 'Russia',
      city: 'Moscow'
    },
    followed: true
  },
  {
    id: 2,
    name: 'Мишаня',
    status: 'Yo bro too',
    photoURL: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
    location: {
      country: 'Moldova',
      city: 'Kishinev'
    },
    followed: false
  },
  {
    id: 3,
    name: 'Катюха',
    status: 'Yo sister too',
    photoURL: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
    location: {
      country: 'Ukraine',
      city: 'Kiev'
    },
    followed: true
  }
]

const UsersSearchReducer = (state:Array<UserType> = initialState, action:ActionsTypes) => {
  switch (action.type) {
    case FOLLOW:
      return state.map(u => u.id === action.payload.userId ? {...u, followed: !u.followed} : u)
    case SET_USERS:
      return state
    default:
      return state
  }
};


export const followAC = (userId:number) => ({
  type: FOLLOW,
  payload: {
    userId
  }
} as const)

export const setUsersAC = (users:Array<UserType>) => ({
  type: SET_USERS,
  payload: {
    users
  }
} as const)


export default UsersSearchReducer;