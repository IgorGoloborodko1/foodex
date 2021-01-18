import * as React from 'react'
import Dropdown from './dropdown'
import Avatar from './avatar'
import avatar from '../../avatar.jpg'

interface UserMenuProps {
  temp: string
}

const UserMenu: React.FC<UserMenuProps> = ({temp}) => {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false)
  const containerRef = React.useRef(null)

  const handleWindowClick = (e: React.S) => {
    const isTargetInsideContainer  = containerRef.!current.contains(e.target)
    setIsDropDownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  React.useEffect(() => {
    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  })

  return (
    <div className='UserMenu' onClick={toggleDropdown} ref={containerRef}>
      <Avatar imgUrl={avatar} width={65} height={65} />
      <span className='UserName'>Mark Zuckerberg</span>
      {isDropDownOpen && <Dropdown temp='temp'/>}
    </div>
  )
}

export default UserMenu
