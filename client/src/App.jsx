import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/primary/Header'
import HeroSection from './components/home/HeroSection'
import Navbar from './components/primary/Navbar'
import TrendingCollections from './components/home/TrendingCollections'


const RouteComponent = () => {
  return (
    <>

    </>
  )

}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Header />
      <Navbar />
        <div className="mx-13">

          <HeroSection />
          <TrendingCollections />
        </div>

      </Router>
    </>
  )
}

export default App
