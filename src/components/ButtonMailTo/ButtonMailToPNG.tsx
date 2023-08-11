// import React from 'react'
import { Link } from "react-router-dom";
import {AiOutlineMail} from "react-icons/ai"
interface Props{
    mailto: string
}

export const ButtonMailToPNG: React.FC<Props> = ({mailto}) => {
  return (
    <Link className="relative"
    to='#'
    onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
    }}
>
    <span 
    className="relative text-base l:text-xl transition-all ease-in-out 
    delay-150 hover:border-b-4 border-gray-600 duration-300">
        <AiOutlineMail className="text-xl" />
    </span>
</Link>
  )
}
