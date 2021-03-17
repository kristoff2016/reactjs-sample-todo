import axios from 'axios'

export const isAuthenticated = () => {
    if (localStorage.sampleTodo) {
      axios.defaults.headers.common.Authorization =
        JSON.parse(localStorage.sampleTodo).accessToken
      return true
    }
  clearCurrentUser()
  return false
}
export const clearCurrentUser = () => {
  axios.defaults.headers.common.Authorization = ''
  localStorage.sampleTodo = null
  delete localStorage.sampleTodo
  localStorage.clear()
  return
}
export const getCurrentUser = () => {
  if (localStorage.sampleTodo) {
    return JSON.parse(localStorage.sampleTodo)
  }
  return null
}