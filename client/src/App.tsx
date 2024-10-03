import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AuthPage } from './pages/auth';
import { ShopPage } from './pages/shop';
import { CheckoutPage } from './pages/checkout';
import { PurchasedItemsPage } from './pages/purchased-items';

const App = () => {
  return (
    <div className='bg-white font-m h-full text-white text-center'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ShopPage/>}/>
          <Route path='/auth' element={<AuthPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/purchased-items' element={<PurchasedItemsPage/>}/>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
