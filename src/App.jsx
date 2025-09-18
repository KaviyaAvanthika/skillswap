import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skillswap from "./Skillswap"
import Signup from "./Signup"
import Homepage from "./assets/Homepage"
import Searchpage from "./assets/Searchpage"
import Learning from "./assets/Learning"
import Account from "./assets/Account"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {isMobile ? (
        <BrowserRouter>
          {/* <Header/> */}
          <Routes>
            <Route path='/' element={<Skillswap />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Skillswap />} />
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/searchpage' element={<Searchpage />} />
            <Route path='/learning' element={<Learning />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20%" }}>
          <h2>You can only access this website on Mobile</h2>
        </div>
      )}
    </>
  )
}

export default App
