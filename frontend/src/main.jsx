import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Recruitment from './Recruitment.jsx'
import ParticleBackground from './components/ParticlesBg/ParticleBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Contact from './Contact.jsx'
import Events from './pages/Events.jsx'


import EventDetail from './pages/EventDetail.jsx'
import EventRegistration from './pages/EventRegistration.jsx'
import HeatCode from './components/Events/HeatCode.jsx'
import ClubExpo from './components/Events/ClubExpo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ParticleBackground />

      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/events' element={<Events />} />

        <Route path="/events/:eventId" element={<EventDetail/>} />
        <Route path="/events/:eventId/register" element={<EventRegistration/>} />
        <Route path="/heatcode" element={<HeatCode/>} />
        <Route path='/clubexpo' element={<ClubExpo/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
)