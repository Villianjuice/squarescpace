import React from 'react'

interface Button {
  title: string;
  onClick: () => void
}

export const Btn: React.FC <Button> = ({title, onClick}) => {
  return (
    <button className='btn' onClick={onClick}>{title}</button>
  )
}
