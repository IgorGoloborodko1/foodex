/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

interface MenuCardProps {
  name: string
  image: string
  price: number
  id: number
  onDelete(id: number): void
  onShowMoreInfo(id: number): void
}

const MenuCard: React.FC<MenuCardProps> = ({name, image, price, id, onShowMoreInfo, onDelete}) => {
  return (
    <div>
      <img src={image} alt={name} width={320} height={240} />
      <p>{name}</p>
      <p>`Price: ${price}`</p>
      <div className='actions'>
        <button onClick={() => onShowMoreInfo(id)}>Подробнее</button>
        <button onClick={() => onDelete(id)}>Удалить</button>
      </div>
    </div>
  )
}

export default MenuCard