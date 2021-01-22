import React from 'react'
import s from './navigation.module.css'

interface NavItem {
  id: number
  name: string
}

interface NavigationProps {
  navItems: NavItem[]
}

const Navigation: React.FC<NavigationProps> = ({
  navItems
}) => {
  return (
    <ul className={s.list}>
      {navItems.map(({id, name}) => (
        <li key={id}><a className={s.link} href='/'>{name}</a></li>
      ))}
    </ul>
  )
}

export default Navigation