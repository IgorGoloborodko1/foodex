import * as React from 'react'

interface HeaderLogoProps {
  imgUrl: string
  width: number
  height: number
}

const Logo: React.FC<HeaderLogoProps> = ({imgUrl = '', width = 60, height = 60}) => {
  return (
      <img src={imgUrl} alt='app logo' width={width} height={height} />
  )
}

export default Logo
