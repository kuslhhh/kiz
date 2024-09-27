import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path='/'/>
          <Route path='/auth'/>
          <Route path='/checkout'/>
          <Route path='/purchased-items'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
