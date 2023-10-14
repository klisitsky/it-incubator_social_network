import {authorize, AUTHORIZED_SUCCES} from "../actions/actionsApp";


export type AppActionsType = ReturnType<typeof authorize>

type initialStateType = {
  authorized: boolean
}

const initialState: initialStateType = {
  authorized: false
}

const ReducerApp = (state = initialState, action:AppActionsType):initialStateType => {
  switch (action.type) {
    case AUTHORIZED_SUCCES:
      return {
        ...state,
        authorized: true
      }
    default:
      return state
  }
};

export default ReducerApp;