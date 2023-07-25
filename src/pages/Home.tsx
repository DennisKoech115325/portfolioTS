// import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row max-w-full h-auto">
        {/* Right Side of DIV = contains short desc */}
        <div className="flex flex-col xl:w-1/2 w-full align-bottom">
          <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <h1 className="text-2xl font-semibold text-primary justify-evenly text-center text-slate-950">
            Skilled Software Engineer Eager to Take on New Challenges
          </h1>
        </div>
        {/* Left Side of DIV = Contains Image of Me*/}
        <div className="flex flex-col xl:w-1/2 w-full">
            <div>
              {/* Image holder */}
            </div>
            <div className="flex flex-row justify-evenly">
              <Link to="https://github.com/DennisKoech115325" target='_blank'>
                <AiFillGithub className="text-4xl"/>
              </Link>
              <Link to="https://www.linkedin.com/in/dennis-kipkorir/" target='_blank'>
                <AiFillLinkedin className="text-4xl"/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Home

