import axios from 'axios'

const BASE_URL = 'http://localhost:4000/menu'

const getAllMenuItems = () => {
  return axios.get(BASE_URL).then((response) => response.data)
}

const getMenuItemById = (id) => {
  return axios.get(`${BASE_URL}/${id}`).then((response) => {
    console.log(response)
  })
}

const deleteMenuItemById = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((response) => response.status === 200)
}

const addMenuItem = (item) => {
  return axios.post(BASE_URL, item).then((response) => response.data)
}

export {getAllMenuItems, getMenuItemById, deleteMenuItemById, addMenuItem}