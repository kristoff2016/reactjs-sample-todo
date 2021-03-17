import { AUTH_USER } from './actionTypes'

export const storeAuth = (auth) => ({
  type: AUTH_USER,
  payload: { auth }
})