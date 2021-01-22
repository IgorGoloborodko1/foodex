import React from 'react'

import Logo from '../logo/logo'
import Navigation from '../navigation/navigation'
import UserMenu from '../userMenu/userMenu'

import logo from './assets/logo.png'
import avatar from './assets/avatar.jpg'
import s from './appHeader.module.css'

const navItems = [
  {id: 1, name: 'menu'},
  {id: 2, name: 'about'},
  {id: 3, name: 'contact'},
  {id: 4, name: 'delivery'},
]

interface AppHeaderProps {
  prop: string
}

const AppHeader: React.FC<AppHeaderProps> = ({
  prop
}) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Logo imgUrl={logo} width={65} height = {65} />
      </div>
      <div className='menu'>
        <Navigation navItems={navItems}/>
      </div>
      <div className={s.usermenu}>
        <UserMenu avatar={avatar} name='Mark Zuckerberg' />
      </div>
      <p>{prop}</p>
    </header>
  )
}

export default AppHeader