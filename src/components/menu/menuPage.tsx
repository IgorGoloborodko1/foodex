import React, { useEffect, useState } from 'react'
import MenuGrid from './menuGrid'
import * as API from '../../services/api'

const MenuPage: React.FC = () => {
  const [menu, setMenu] = useState<any[]>([])

  const filterMenu = (currentMenu: any[], id: number) => currentMenu.filter((i) => i !== id)

  const handleDeleteItem = (id: number) => {
    API.deleteMenuItemById(id).then((success) => {
      if(!success) return
      const filteredMenu = filterMenu(menu, id)
      setMenu(filteredMenu)
    })
  } 

  const handleShowMoreInfo = (id: number) => {
    API.getMenuItemById(id).then((item) => {
      console.log(item)
    })
  }
  const handleAddMenuItem = () => {
    const item = {
      name: `New name ${Date.now()}`,
      price: 100,
      image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg'
    }

    API.addMenuItem(item).then((newItem) => {
      const newMenu = [...menu, newItem]
      setMenu(newMenu)
    })
  }

  useEffect(() => {
    API.getAllMenuItems().then((menu) => setMenu(menu))
  }, [])

  return (
    <>
      <button onClick={handleAddMenuItem}>Добавить элемент меню</button>
      <MenuGrid items={menu} onDelete={handleDeleteItem} onShowMoreInfo={handleShowMoreInfo}/>
    </>
  )
}

export default MenuPage