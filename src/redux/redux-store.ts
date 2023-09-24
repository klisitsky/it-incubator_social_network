import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerProfile from "./reducers/reducerProfile";
import reducerDialogs from "./reducers/reducerDialogs";
import reducerNavbar from "./reducers/reducerNavbar";
import ReducerUsersSearch from "./reducers/reducerUsersSearch";
import reducerHeader from "./reducers/reducerHeader";
import ReducerAuth from "./reducers/reducerAuth";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'



const reducers = combineReducers({
  header: reducerHeader,
  profilePage: reducerProfile,
  dialogsPage: reducerDialogs,
  navbar: reducerNavbar,
  usersSearchPage: ReducerUsersSearch,
  auth: ReducerAuth,
  form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store

export default store