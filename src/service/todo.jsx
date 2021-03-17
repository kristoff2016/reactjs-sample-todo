import * as API_SERVICE from './service'

export const serviceGetTodo = async (query) => {
  const response = await API_SERVICE.getData(`todo?filter=${query.filter}&search=${query.search}`)
  return response
}
export const serviceCreateTodo = async (body) => {
  const response = await API_SERVICE.postData(`todo`, body)
  return response
}
export const serviceUpdateTodo = async (id,body) => {
  const response = await API_SERVICE.updateData(`todo/${id}`, body)
  return response
}
