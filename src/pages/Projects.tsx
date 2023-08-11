import { useState } from "react"
import { Project as ProjectModel } from "../model/ProjectModel"
import { Project } from "../components/Project";
import { ecom, PS } from "../projectData";
const Projects: React.FC = () => {

  const [projects, setProjects] = useState<ProjectModel[]>([ecom, PS]);
  return (
    <div className="flex max-w-full flex-col px-5 my-2">
      <h1 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary text-center pb-2">These are my projects</h1>
      <div className="flex flex-col space-y-4">
        {
          projects && projects.length > 0 ?
            projects.map((element)=>{
              return (<Project key={element.id} singleProject={element} />)
            }
            )
          :
            <h1>No Projects Listed</h1>
        }
      </div>
    </div>
  )
}

export default Projects