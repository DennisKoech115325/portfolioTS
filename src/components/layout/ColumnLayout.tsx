import React from 'react'

const ColumnLayout: React.FC = () => {
  return (
    <div>
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
              
            </div>
        </div>
    </div>
  )
}

export default ColumnLayout