import axios from 'axios'

const BASE_URL = 'http://localhost:4000/menu'

const getAllMenuItems = () => {
  return axios.get(BASE_URL).then((r) => r.data)
}

const getMenuItem = (id) => {
  return axios.get(`BASE_URL/${id}`).then((r) => {
    console.log(r)
  })
}

export {getAllMenuItems, getMenuItem}