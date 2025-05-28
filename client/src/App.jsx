import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/primary/Header'
import HeroSection from './components/home/HeroSection'
import Navbar from './components/primary/Navbar'
import TrendingCollections from './components/home/TrendingCollections'
import SpecialDeals from './components/home/SpecialDeals'
import ProductsSection from './components/home/ProductsSection'
import MainLayout from './layouts/MainLayout'


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
        <div className="mx-13 flex flex-col gap-10">
          <MainLayout />
        </div>

      </Router>
    </>
  )
}

export default App
