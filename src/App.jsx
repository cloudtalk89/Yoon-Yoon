import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SupriseSection from './pages/SupriseSection'
import Moments from './pages/Moments'



const App = () => {
  return (
   <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-violet-600 via-violet-700 to-violet-900 font-cause">

  {/* Violet glowing moon */}
  <div className="absolute top-20 right-24 w-40 h-40 bg-violet-300/30 rounded-full blur-3xl"></div>

  {/* Big glowing blobs */}
  <div className="absolute -top-32 -left-24 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl"></div>

  <div className="absolute -bottom-30 -right-20 w-105 h-105 bg-violet-500/20 rounded-full blur-3xl"></div>

  {/* Stars */}
  <div className="absolute inset-0 overflow-hidden">
    <span className="absolute top-[10%] left-[20%] text-white text-xl animate-pulse">✦</span>
    <span className="absolute top-[18%] left-[70%] text-violet-200 text-2xl animate-pulse">✧</span>
    <span className="absolute top-[32%] left-[40%] text-white text-lg animate-ping">✦</span>
    <span className="absolute top-[50%] left-[80%] text-violet-100 text-xl animate-pulse">✧</span>
    <span className="absolute top-[70%] left-[15%] text-white text-2xl animate-pulse">✦</span>
    <span className="absolute top-[82%] left-[60%] text-violet-200 text-lg animate-ping">✧</span>
    <span className="absolute top-[25%] left-[90%] text-white text-sm animate-pulse">✦</span>
    <span className="absolute top-[60%] left-[50%] text-violet-100 text-xl animate-pulse">✧</span>
  </div>
  {/* Soft sky glow */}
  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>


    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surprise" element={<SupriseSection />} />
        <Route path="/moments" element={<Moments />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App