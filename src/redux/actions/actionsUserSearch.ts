import {UserType} from "../reducers/reducerUsersSearch";

export const FOLLOWING = "userSearch/FOLLOWING"
export const SET_USERS = "userSearch/SET_USERS"
export const SET_TOTAL_USERS_COUNT = "userSearch/SET_TOTAL_USERS_COUNT"
export const SET_NEW_CURRENT_PAGE = "userSearch/SET_NEW_CURRENT_PAGE"
export const TOGGLE_FETCHING = "userSearch/TOGGLE_FETCHING"
export const CHANGE_FOLLOWING_IN_PROGRESS = "userSearch/CHANGE_FOLLOWING_IN_PROGRESS"
export const CHANGE_PORTION_NUMBER = "userSearch/CHANGE_PORTION_NUMBER"


export const changeFollowedStatus = (userId:number, isFollow: boolean) => ({
  type: FOLLOWING,
  payload: {
    userId,
    isFollow
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

export const changePortionNumber = (portionNumber: number) => ({
  type: CHANGE_PORTION_NUMBER,
  payload: {
    portionNumber
  }
} as const)

