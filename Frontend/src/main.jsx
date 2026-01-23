import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Landing_page/Home/HomePage.jsx';
import SignUp from './Landing_page/Signup/SignUp.jsx';
import About from './Landing_page/About/AboutPage.jsx';
import Product from './Landing_page/Products/ProductsPage.jsx';
import Pricing from  './Landing_page/Pricing/PricingPage.jsx'  
import Support from './Landing_page/Support/SupportPage.jsx';
import NotFound from './Landing_page/NotFound.jsx';
import Navbar from './Landing_page/Navbar.jsx';
import Footer from './Landing_page/Footer.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/support' element={<Support />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
)
