import React from 'react'
import ButtonMailto from './ButtonMailTo/ButtonMailTo'
import { ButtonMailToPNG } from './ButtonMailTo/ButtonMailToPNG'
const Nav2: React.FC = () => {
  return (
    <div className='relative container pb-5 pt-5 max-w-full align-baseline'>
        <div className="flex flex-row justify-between">
            <h1 className='text-2xl font-medium leading-tight text-primary text-center'>Dennis Koech Kipkorir</h1>
            <div className='hidden bri:flex'>
                <ButtonMailto label="dennis007kipkorir@gmail.com" mailto='mailto:dennis007kipkorir@gmail.com' />
            </div>
            <div className='flex bri:hidden'>
                <ButtonMailToPNG mailto="mailto:dennis007kipkorir@gmail.com"/>
            </div>
        </div>
    </div>
  )
}

export default Nav2