import {ActionsTypes} from "./redux-store";

const FOLLOW = "FOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_NEW_CURRENT_PAGE = "SET_NEW_CURRENT_PAGE"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"



export type UsersSearchActionsTypes = ReturnType<typeof changeFollowedStatus>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setNewCurrentPage>
  | ReturnType<typeof toggleFetching>


export type UserType = {
  name: string
  id: number
  uniqueUrlName: string
  photos: {
    small: string
    large: string
  }
  status: string
  followed: boolean
}

export type UsersSearchType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  countOfUsersOnPage: number
  isFetching: boolean
}



const initialState: UsersSearchType = {
  users: [
    // {
    // id: 1,
    // name: 'Дмитрий',
    // uniqueUrlName: '',
    // status: 'Yo bro',
    // photos: {
    //   small: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
    //   large: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
    // },
    // followed: true
    // }
  ],
  currentPage: 4,
  totalUsersCount: 19,
  countOfUsersOnPage: 10,
  isFetching: false
}

const ReducerUsersSearch = (state = initialState, action:ActionsTypes): UsersSearchType => {
  switch (action.type) {
    case FOLLOW:
      return {
      ...state,
      users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: !u.followed} : u)
    }
    case SET_USERS:
      return {...state,
        users: action.payload.users
      }
    case SET_TOTAL_USERS_COUNT:
      return {...state,
        totalUsersCount: action.payload.totalUsersCount
      }
      case SET_NEW_CURRENT_PAGE:
      return {...state,
        currentPage: action.payload.newCurrentPage
      }
      case TOGGLE_FETCHING:
      return {...state,
        isFetching: action.payload.isFetching
      }
    default:
      return state
  }
};


export const changeFollowedStatus = (userId:number) => ({
  type: FOLLOW,
  payload: {
    userId
  }
} as const)

export const setUsers = (users:Array<UserType>) => ({
  type: SET_USERS,
  payload: {
    users
  }
} as const)

export const setTotalUsersCount = (totalUsersCount:number) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: {
    totalUsersCount
  }
} as const)

export const setNewCurrentPage = (newCurrentPage:number) => ({
  type: SET_NEW_CURRENT_PAGE,
  payload: {
    newCurrentPage
  }
} as const)

export const toggleFetching = (isFetching:boolean) => ({
  type: TOGGLE_FETCHING,
  payload: {
    isFetching
  }
} as const)


export default ReducerUsersSearch;