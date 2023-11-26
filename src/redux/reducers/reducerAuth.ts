import {
    AUTH_STATUS_CHANGING,
    AuthStatusChanging,
    SET_USER_DATA,
    setAuthUserData
} from "../actions/actionsAuth";


export type AuthActionsType = ReturnType<typeof setAuthUserData>
  | ReturnType<typeof AuthStatusChanging>

export type initialStateType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    },
    isAuth: boolean
}

const initialState: initialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

const ReducerAuth = (state = initialState, action:AuthActionsType):initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.payload.data
            }
        case AUTH_STATUS_CHANGING:
            return {
            ...state,
            isAuth: action.isAuth
        }
        default:
            return state
    }
};

export default ReducerAuth;