import React from 'react'

const Technologies: React.FC = () => {
  return (
    <div className="flex flex-col max-w-full h-auto space-y-5">
        <h1 className='mb-2 mt-0 text-3xl font-medium leading-tight text-primary text-center pb-2'>Tools and Technologies I use.</h1>
        <div className="flex l:flex-row flex-col space-y-2 l:space-x-5">
            <h1 className='mb-2 mt-0 text-xl font-medium leading-tight text-primary l:w-1/5 w-full'>Developer Tools</h1>
            <ul className="list-disc list-inside l:w-4/5 w-full">
                <li>Git</li>
                <li>Github</li>
                <li></li>
            </ul>            
        </div>
        <div className="flex l:flex-row flex-col space-y-2 l:space-x-5 ">
            <h1 className='mb-2 mt-0 text-xl font-medium leading-tight text-primary l:w-1/5 w-full'>Developer Technologies.</h1>
            <div className="flex flex-row space-x-5 l:w-4/5 w-full justify-between l:justify-start">
                <ul className="list-disc list-inside ">
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>ReactJS</li>
                <li>TypeScript</li>
                </ul>
                <ul className="list-disc list-inside">
                <li>PHP</li>
                <li>Laravel</li>
                <li>Java</li>
                <li>SpringBoot</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Technologies