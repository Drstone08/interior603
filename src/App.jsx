import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Aboutus from './components/Aboutus'
import Home from './components/Home' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
    </>
  )
}

export default App
