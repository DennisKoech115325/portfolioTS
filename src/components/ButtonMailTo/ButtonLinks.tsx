import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
    label: string,
    url: string,
    Icon: JSX.Element
}
const ButtonLinks: React.FC<Props> = ({label, url, Icon}) => {
  return (
    <Link 
    target='_blank' 
    to='#'
    onClick={(e)=>{
      e.preventDefault()
      window.open(
        url,
        '_blank'
      )
    }}
    className='flex flex-row space-x-4'>
        {Icon} <span className='mb-2 mt-0 text-md font-medium leading-tight text-primary text-lg'>{label}</span>
    </Link>
  )
}

export default ButtonLinks