import React from 'react'

import Logo from './logo'
import Navigation from './navigation'
import UserMenu from './userMenu'

import food from '../../logo.png'
import avatar from '../../avatar.jpg'

const navItems = ['menu', 'about', 'contact', 'delivery']

interface AppHeaderProps {
  prop: string
}

const AppHeader: React.FC<AppHeaderProps> = ({
  prop
}) => {
  return (
    <header className='Header'>
      <div className='logo'>
        <Logo imgUrl={food} width={65} height = {65} />
      </div>
      <div className='menu'>
        <Navigation navItems={navItems}/>
      </div>
      <div className='Header__UserMenu'>
        <UserMenu avatar={avatar} name='Mark Zuckerberg' />
      </div>
      <p>{prop}</p>
    </header>
  )
}

export default AppHeader