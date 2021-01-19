import React, { useState, useEffect, useRef } from 'react'
import Dropdown from './dropdown'
import Avatar from './avatar'

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
    console.log('called!')
    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  })

  return (
    <div className='UserMenu' onClick={openDropdown} ref={containerRef}>
      <Avatar imgUrl={avatar} width={65} height={65} />
      <span className='UserName'>{name}</span>
      {isDropDownOpen && <Dropdown />}
    </div>
  )
}

export default UserMenu
