import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../configs/routes'
import MenuCard from './menuCard'

interface MenuGridItem {
  id: number
  name: string
  description: string
  image: string
  price: number
  ingridients: string[]
}

interface MenuGridProps {
  items: MenuGridItem[]
  onDelete(id: number): void
  onShowMoreInfo(id: number): void
}

const MenuGrid: React.FC<MenuGridProps> = ({
  items,
  onDelete,
  onShowMoreInfo,
}) => {
  return (
    <ul>
      {items.map(({name, id, price, image}) => (
        <li key={id}>
          <Link to={`${Routes.MENU}/${id}`}>
            <MenuCard
              name={name}
              image={image}
              price={price}
              id={id}
              onDelete={onDelete}
              onShowMoreInfo={onShowMoreInfo}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuGrid
