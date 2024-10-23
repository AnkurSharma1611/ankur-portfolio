import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const App = () => {
  return (
   <main className="bg-slate-300/20 h-full object-contain">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<About/>}/>
                {/* <Route path="/about" element={<About/>}/> */}
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
   </main>
  )
}

export default App
