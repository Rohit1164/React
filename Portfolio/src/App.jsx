import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import About from './Component/About/About'
import MiniProject from './Component/Skills/MiniProject'
import Skill from './Component/Skills/Skill'
import Project from './Component/Work/Project'
import ProjectTwo from './Component/Work/ProjectTwo'
import Footer from './Component/Footer/Footer'
import Thanks from './Component/Thanks/Thanks'

function App() {

  return (
    <div className='h-[100%]'>
      <main className='lg:w-[100%] md:w-[100%] sm:w-[100%] h-[100vh] bg-green-950'>
      <Navbar/>
      <Home/>
      </main>
      <About/>
      <Project/>
      <ProjectTwo/>
      <Skill/>
      <MiniProject/> 
      <Thanks/>
      <Footer/>
    </div>
  )
}

export default App
