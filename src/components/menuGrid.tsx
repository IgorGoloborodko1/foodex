import React from 'react'

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
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <ul>
      {items.map(({name, id}) => (
        <li key={id}>{name}</li>
      ))} 
    </ul>
  )
}

export default MenuGrid