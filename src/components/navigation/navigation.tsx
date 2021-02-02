import React from 'react'
import styles from './navigation.module.css'

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
    <ul className={styles.list}>
      {navItems.map(({id, name}) => (
        <li key={id}><a className={styles.link} href='/'>{name}</a></li>
      ))}
    </ul>
  )
}

export default Navigation