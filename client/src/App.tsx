import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { AuthPage } from './pages/auth'
import { CheckoutPage } from './pages/checkout'
import { PurchasedPage } from './pages/purchased-items'
import { ShopPage } from './pages/shop'


function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-[#1a1a1a] to-black h-screen text-[#a9a9a9] p-10"
        style={{ backgroundImage: "url('/bg.avif')" }}
      >
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<ShopPage/>} />
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path='/purchased-items' element={<PurchasedPage/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
