import React, { useState, useEffect, useRef } from 'react'
import Dropdown from './dropdown/dropdown'
import Avatar from '../avatar/avatar'
import s from './userMenu.module.css'

interface UserMenuProps {
  avatar: string
  name: string
}

const UserMenu: React.FC<UserMenuProps> = ({ avatar, name }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const openDropdown = () => {
    setIsDropDownOpen(true)
  }

  const closeDropdown = () => {
    setIsDropDownOpen(false)
  }

  // @ts-ignore
  const handleWindowClick = (e) => {
    // @ts-ignore
    const isTargetInsideContainer  = containerRef.current.contains(e.target)

    if(isDropDownOpen && !isTargetInsideContainer) {
      closeDropdown()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  })

  return (
    <div className={s.container} onClick={openDropdown} ref={containerRef}>
      <Avatar imgUrl={avatar} width={65} height={65} />
      <span className={s.name}>{name}</span>
      {isDropDownOpen && <Dropdown />}
    </div>
  )
}

export default UserMenu
