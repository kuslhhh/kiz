import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-[#1a1a1a] to-black h-screen text-[#a9a9a9] p-10"
        style={{ backgroundImage: "url('/bg.avif')" }}
      >
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' />
            <Route path='/auth' />
            <Route path='/checkout' />
            <Route path='/purchased-items' />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
