import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ContactPage } from './pages/contact-page'
import { HomePage } from './pages/home-page'
import { PricePage } from './pages/price-page'
import { AboutPage } from './pages/about-page'
import { GalleryPage } from './pages/gallery-page'
import { ServicesPage } from './pages/services-page'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/prices' element={<PricePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
