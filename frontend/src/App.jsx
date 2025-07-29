import { Routes, Route } from 'react-router-dom';
import HomePage from './landingpage/home/HomePage'
import Signup from './landingpage/signup/Signup';
import AboutPage from './landingpage/about/AboutPage';
import Pricing from './landingpage/home/pricing';
import SupportPage from './landingpage/support/SupportPage';
import ProductsPage from './landingpage/products/ProductsPage';
import NotFound from './landingpage/NotFound';
import PricingPage from './landingpage/pricing/PricingPage';

function App() {
  

  return (
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
