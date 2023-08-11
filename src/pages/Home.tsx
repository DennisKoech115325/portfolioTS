// import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import ButtonLinks from '../components/ButtonMailTo/ButtonLinks'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row max-w-full h-auto">
        {/* Right Side of DIV = contains short desc */}
        <div className="flex flex-col xl:w-1/2 w-full align-bottom">
          <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <h1 className="text-3xl font-semibold text-primary justify-evenly text-center text-slate-950">
            Skilled Full-stack web Developer Eager to Take on New Challenges.
          </h1>
          <p className="mt-3 text-justify text-lg">
          I am a skilled Full-stack web Developer with a passion for creating efficient and innovative solutions. My expertise lies in designing, developing, and maintaining software applications that meet high standards of quality and functionality.
          </p>
        </div>
        {/* Left Side of DIV = Contains Image of Me*/}
        <div className="flex flex-col xl:w-1/2 w-full">
            <div>
              {/* Image holder */}
            </div>
            <div className="flex flex-row justify-evenly">
            <ButtonLinks label="Github" url="https://github.com/DennisKoech115325" Icon={<AiFillGithub className='text-2xl'/>}/>
          <ButtonLinks label="Gmail" url="mailto:dennis007kipkorir@gmail.com" Icon={<AiOutlineMail className='text-2xl'/>}/>
          <ButtonLinks label="LinkedIn" url="https://www.linkedin.com/in/dennis-kipkorir/" Icon={<AiFillLinkedin className='text-2xl'/>}/>
            </div>
        </div>
    </div>
  )
}

export default Home

