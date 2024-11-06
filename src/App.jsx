import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Client from './Components/client'
import Profile from './Components/Profile'
import ProjectCards from './Components/ProjectCards'
import Contact from './Components/Contact'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Profile />
      <About />
      <ProjectCards />
      <Client />
      <Contact />
    </div>

  )
}

export default App
