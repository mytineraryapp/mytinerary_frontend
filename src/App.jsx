import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Index from './pages/Index'
import Show from './pages/Show'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes>
    </div>
  )
}

export default App
