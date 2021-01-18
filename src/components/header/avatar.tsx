import * as React from 'react'

interface AvatarProps {
  imgUrl: string
  width: number
  height: number
}

const Avatar: React.FC<AvatarProps> = ({imgUrl = '', width = 60, height = 60}) => {
  return (
      <img className='Avatar' src={imgUrl} alt='app logo' width={width} height={height} />
  )
}

export default Avatar