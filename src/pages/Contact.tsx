import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import ButtonLinks from "../components/ButtonMailTo/ButtonLinks"
const Contact:React.FC = () => {
  return (
    <div className="flex flex-col max-w-full h-auto mb-10 pb-20 space-y-5">
      <h1 className="text-3xl font-semibold text-primary justify-evenly text-center text-slate-950 my-4">Contact Me</h1>
      <br />
      <div className="flex flex-row space-x-2 max-w-full">
        <div className="w-1/2">
          <p className="mt-3 text-justify l:text-lg text-base">Connect with me through the following links.</p>
        </div>
        <div className="w-1/2 flex flex-col space-y-2 justify-start">
          <ButtonLinks label="Github" url="https://github.com/DennisKoech115325" Icon={<AiFillGithub className='text-2xl'/>}/>
          <ButtonLinks label="Gmail" url="mailto:dennis007kipkorir@gmail.com" Icon={<AiOutlineMail className='text-2xl'/>}/>
          <ButtonLinks label="LinkedIn" url="https://www.linkedin.com/in/dennis-kipkorir/" Icon={<AiFillLinkedin className='text-2xl'/>}/>

        </div>

      </div>
    </div>
  )
}

export default Contact