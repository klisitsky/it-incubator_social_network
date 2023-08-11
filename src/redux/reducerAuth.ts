

const SET_USER_DATA = 'SET_USER_DATA'
const AUTH_STATUS_CHANGING = 'AUTH_STATUS_CHANGING'

export type AuthActionsType = ReturnType<typeof setAuthUserData>

export type AuthType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    },
    isAuth: boolean
}

const initialState: AuthType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

const ReducerAuth = (state = initialState, action:AuthActionsType):AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.payload.data
            }
        case AUTH_STATUS_CHANGING:
            return {
            ...state,
            isAuth: true
        }
        default:
            return state
    }
};

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    payload: {
        data: {
            id,
            email,
            login
        }
    }
})

export const AuthStatusChanging = () => ({
    type: AUTH_STATUS_CHANGING,
})

export default ReducerAuth;