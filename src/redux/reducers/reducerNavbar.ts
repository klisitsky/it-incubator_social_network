import {NavBarType} from "../../components/NavBar/NavBar";
import {v1} from "uuid";


const initialState: Array<NavBarType> = [
      {id: v1(), name: 'Profile', pageUrl: '/profile'},
      {id: v1(), name: 'Messages', pageUrl: '/dialogs'},
      {id: v1(), name: 'News', pageUrl: '/news'},
      {id: v1(), name: 'Music', pageUrl: '/music'},
      {id: v1(), name: 'Users Search', pageUrl: '/search'},
      {id: v1(), name: 'Settings', pageUrl: '/settings'}

]

const reducerNavbar = (state:Array<NavBarType> = initialState, action:any) => {
      return state
}

export default reducerNavbar