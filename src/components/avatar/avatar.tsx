import React from 'react'
import styles from './avatar.module.css'

interface AvatarProps {
  imgUrl: string
  width: number
  height: number
}

const Avatar: React.FC<AvatarProps> = ({imgUrl = '', width = 60, height = 60}) => {
  return (
      <img className={styles.avatar} src={imgUrl} alt='app logo' width={width} height={height} />
  )
}

export default Avatar