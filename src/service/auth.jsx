import * as API_SERVICE from './service'

export const serviceLogin = async (body) => {
  const response = await API_SERVICE.postData(`login`, body)
  return response
}
export const serviceRegister = async (body) => {
  const response = await API_SERVICE.postData(`register`, body)
  return response
}
  
