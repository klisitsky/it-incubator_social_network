import {UserType} from "../reducers/reducerUsersSearch";

export const FOLLOW = "FOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const SET_NEW_CURRENT_PAGE = "SET_NEW_CURRENT_PAGE"
export const TOGGLE_FETCHING = "TOGGLE_FETCHING"
export const CHANGE_FOLLOWING_IN_PROGRESS = "CHANGE_FOLLOWING_IN_PROGRESS"


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

export const changeFollowingInProgress = (isContained: boolean, userId:number) => ({
  type: CHANGE_FOLLOWING_IN_PROGRESS,
  payload: {
    userId,
    isContained
  }
} as const)