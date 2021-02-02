import React from 'react'

import Logo from '../logo/logo'
import Navigation from '../navigation/navigation'
import UserMenu from '../userMenu/userMenu'

import logo from './assets/logo.png'
import avatar from './assets/avatar.jpg'
import styles from './appHeader.module.css'

const navItems = [
  {id: 1, name: 'menu'},
  {id: 2, name: 'about'},
  {id: 3, name: 'contact'},
  {id: 4, name: 'delivery'},
]

const AppHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo imgUrl={logo} width={65} height = {65} />
      </div>
      <div className='menu'>
        <Navigation navItems={navItems}/>
      </div>
      <div className={styles.usermenu}>
        <UserMenu avatar={avatar} name='Mark Zuckerberg' />
      </div>
    </header>
  )
}

export default AppHeader