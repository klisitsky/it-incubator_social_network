import {ActionsTypes} from "./redux-store";


type HeaderType = {
  mainLogoSite: string
}

const initialState: HeaderType = {
  mainLogoSite: 'https://img.freepik.com/premium-vector/letter-cc-logo-design-abstract-letter-cc-logo-design_219523-125.jpg'
}

const reducerHeader = (state:HeaderType = initialState, action:ActionsTypes):HeaderType => {
  return state
}

export default reducerHeader