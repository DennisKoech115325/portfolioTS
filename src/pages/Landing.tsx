import React from 'react'
import Home from './Home'
// import About from './About'
import Projects from './Projects'
import Technologies from './Technologies'
import Contact from './Contact'
const Landing: React.FC = () => {
  return (
    <div className="pt-20 flex flex-col max-w-full space-y-24 px-5">
        <section>
            <Home />
        </section>
          <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <section>
            <Technologies />
        </section>
          <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <section>
            <Projects />
        </section>
          <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        <section>
            <Contact />
        </section>
    </div>
  )
}

export default Landing