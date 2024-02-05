export const SET_USER_DATA = 'SET_USER_DATA'
export const AUTH_STATUS_CHANGING = 'auth/AUTH_STATUS_CHANGING'
export const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'


export const setAuthUserData = (id: number, email: string, login: string) => ({
  type: SET_USER_DATA,
  payload: {
    data: {
      id,
      email,
      login
    }
  }
} as const)

export const authStatusChanging = (isAuth: boolean) => ({
  type: AUTH_STATUS_CHANGING,
  isAuth
} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl
} as const)
