import {
    AUTH_STATUS_CHANGING,
    authStatusChanging, GET_CAPTCHA_URL_SUCCESS, getCaptchaUrlSuccess,
    SET_USER_DATA,
    setAuthUserData
} from "../actions/actionsAuth";


export type AuthActionsType = ReturnType<typeof setAuthUserData>
  | ReturnType<typeof authStatusChanging>
  | ReturnType<typeof getCaptchaUrlSuccess>

export type initialStateType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    },
    isAuth: boolean,
    captchaUrl: string | null
}

const initialState: initialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    captchaUrl: null
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
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
};

export default ReducerAuth;