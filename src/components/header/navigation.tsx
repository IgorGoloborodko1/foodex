import React from 'react'

interface NavigationProps {
  navItems: string[]
}

const Navigation: React.FC<NavigationProps> = ({
  navItems
}) => {
  return (
    <ul>
      {navItems.map((i: string) => (
        <li><a href='/'>{i}</a></li>
      ))}
    </ul>
  )
}

export default Navigation