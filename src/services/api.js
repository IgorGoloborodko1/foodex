import axios from 'axios'

const BASE_URL = 'http://localhost:4000/menu'

const getAllMenuItems = () => {
  return axios.get(BASE_URL).then((r) => r.data)
}

const getMenuItemById = (id) => {
  return axios.get(`${BASE_URL}/${id}`).then((r) => {
    console.log(r)
  })
}

const deleteMenuItemById = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((response) => response.status === 200)
}

const addMenuItem = (item) => {
  return axios.post(BASE_URL, item).then((response) => response.data)
}

export {getAllMenuItems, getMenuItemById, deleteMenuItemById, addMenuItem}