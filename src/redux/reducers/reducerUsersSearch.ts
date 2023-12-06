import {
  CHANGE_FOLLOWING_IN_PROGRESS,
  changeFollowedStatus, changeFollowingInProgress, FOLLOWING, SET_NEW_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS,
  setNewCurrentPage,
  setTotalUsersCount,
  setUsers, TOGGLE_FETCHING,
  toggleFetching,
  CHANGE_PORTION_NUMBER, changePortionNumber
} from "../actions/actionsUserSearch";


export type UsersSearchActionsTypes = ReturnType<typeof changeFollowedStatus>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setNewCurrentPage>
  | ReturnType<typeof toggleFetching>
  | ReturnType<typeof changeFollowingInProgress>
  | ReturnType<typeof changePortionNumber>



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

type initialStateType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  pageSize: number
  isFetching: boolean
  followingsInProgress: Array<number>
  portionNumber: number
}



const initialState: initialStateType = {
  users: [],
  currentPage: 4,
  totalUsersCount: 19,
  pageSize: 10,
  isFetching: false,
  followingsInProgress: [],
  portionNumber: 1
}

const ReducerUsersSearch = (state = initialState, action:UsersSearchActionsTypes): initialStateType => {
  switch (action.type) {
    case FOLLOWING:
      return {
      ...state,
      users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: action.payload.isFollow} : u)
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
    case CHANGE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingsInProgress: action.payload.isContained
            ? [...state.followingsInProgress, action.payload.userId]
            : state.followingsInProgress.filter(u => u !== action.payload.userId)
      }
    case CHANGE_PORTION_NUMBER:
      return {
        ...state,
        portionNumber: action.payload.portionNumber
      }
    default:
      return state
  }
};


export default ReducerUsersSearch;