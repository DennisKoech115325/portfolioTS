import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Home from './pages/Home'
// import Nav from './components/Nav'
import Nav2 from './components/NavBar'
import Landing from './pages/Landing'
function App() {

  return (
    <div className='xl:px-40 xl:pt-16 px-8 pt-3 h-auto'>
      <Router>
        <Nav2/>
        <Routes>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='home' element={<Home/>}/>
          <Route index element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
