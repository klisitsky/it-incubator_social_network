import ReducerAuth, { initialStateType } from "./reducerAuth"
import {AuthStatusChanging, setAuthUserData} from "../actions/actionsAuth";

let startState: initialStateType
beforeEach(() => {
  startState = {
    data: {
      id: null,
      email: null,
      login: null,
    },
    isAuth: false
  }

})


test('user data should be added', () => {

  const endState = ReducerAuth(startState, setAuthUserData(1,'test@test.ru', 'test'))

  expect(endState.data.id).toBe(1)
  expect(endState.data.email).toBe('test@test.ru')
  expect(endState.data.login).toBe('test')
})

test('isAuth status should be changed', () => {

  const endState = ReducerAuth(startState, AuthStatusChanging(true))

  expect(endState.isAuth).toBe(true)
})