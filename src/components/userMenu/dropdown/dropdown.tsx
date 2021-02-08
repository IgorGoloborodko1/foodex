import React from 'react'
import { Link } from 'react-router-dom'

import { UserNavItems } from '../../../configs/userNav'

import styles from './dropdown.module.css'

// interface DropdownProps {
//   temp: string
// }

const Dropdown: React.FC = () => {
  return (
    <div className={styles.dropdown}>
      <ul>
        {UserNavItems.map(({id, name, path}) => (
          <li key={id}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
      <button>Logout</button>
    </div>
  )
}

export default Dropdown