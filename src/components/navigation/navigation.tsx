import React from 'react'
import { NavLink } from 'react-router-dom'

import { Routes } from '../../configs/routes'
import styles from './navigation.module.css'

interface NavItem {
  id: number
  name: string,
  path: string
}

interface NavigationProps {
  navItems: NavItem[]
}

const Navigation: React.FC<NavigationProps> = ({
  navItems
}) => {
  return (
    <ul className={styles.list}>
      {navItems.map(({id, name, path}) => (
        <li key={id}>
          <NavLink to={path} className={styles.link}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Navigation