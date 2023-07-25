import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
const Landing: React.FC = () => {
  return (
    <div className="pt-20 flex flex-col max-w-full space-y-24 px-5">
        <section>
            <Home />
        </section>
        <section>
            <Projects />
        </section>
        <section>
            <About />
        </section>
    </div>
  )
}

export default Landing