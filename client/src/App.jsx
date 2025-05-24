import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


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
      {/* <Router>
        <Routes>
          <RouteComponent />
        </Routes>
      </Router> */}
      {/* For Router Setup for future */}

      {/* Dummy Test Returning Value */}
      <h1>Welcome to Trendora!</h1>
    </>
  )
}

export default App
