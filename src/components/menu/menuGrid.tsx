import React from 'react'
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
          <MenuCard
            name={name}
            image={image}
            price={price}
            id={id}
            onDelete={onDelete}
            onShowMoreInfo={onShowMoreInfo}
          />
        </li>
      ))}
    </ul>
  )
}

export default MenuGrid
