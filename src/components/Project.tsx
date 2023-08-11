import React from 'react'
import { Project as ProjectModel } from '../model/ProjectModel'
import { v4 } from 'uuid'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'
interface Props {
    singleProject: ProjectModel
}

export const Project: React.FC<Props> = ({singleProject}) => {
  return (
    <div className='flex flex-col space-y-1 mb-5'>
        <h1 className='mb-2 mt-0 text-xl font-medium leading-tight text-primary'>{singleProject.name}</h1>
        <div className="flex l:flex-row flex-col">
            {/* Left Column */}
            <div className="w-full l:w-3/4 l:pr-2" dangerouslySetInnerHTML={{ __html: singleProject.details }}>
                {/* <p className="text-left text-lg">{singleProject.details}</p> */}
            </div>
            {/* Right Column */}
            <div className="w-full l:w-1/4 l:pl-2 sm:pt-3 l:pt-0">
                <h3 className='mb-2 mt-0 text-md font-medium leading-tight text-primary'>Technologies Used</h3>
                <ul className='list-disc list-inside'>
                    {
                        singleProject.technologies && singleProject.technologies.length > 0 ?
                            singleProject.technologies.map((x)=>
                                <li key={v4()} className=''>{x}</li>
                            )
                        :
                            <h1>No Tech Set</h1>
                    }
                </ul>
            </div>
        </div>
        {
            singleProject.link ? 
            <Link to={singleProject.link} target='_blank' className='flex flex-row space-x-4'>
                <AiFillGithub className="text-2xl"/> <span className='mb-2 mt-0 text-md font-medium leading-tight text-primary'>Github</span>
            </Link>
            :
            <></>
        }

    </div>
  )
}
