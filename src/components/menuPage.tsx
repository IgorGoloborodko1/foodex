import React, { useEffect, useState } from 'react'
import MenuGrid from './menuGrid'
import * as API from '../services/api'

const MenuPage: React.FC = () => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    API.getAllMenuItems().then((menu) => {
      setMenu(menu)
    })
  })

  return (
    <MenuGrid items={menu}/>
  )
}

export default MenuPage