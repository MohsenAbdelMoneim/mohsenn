import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProgressBar } from 'react-loader-spinner'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Projectss from './Projectss'
import Skills from './Skills'
import Contact from './Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='bg-gray-950 text-white'>
      <BrowserRouter>
        {
          loading ?
            <div className='flex justify-center items-center h-[100vh]'>
         
<ProgressBar
visible={true}
height="80"
width="80"
color="#4fa94d"
ariaLabel="progress-bar-loading"
wrapperStyle={{}}
wrapperClass=""
/>
              </div>
            :
           
            <>
           <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<h1>About</h1>} />
              <Route path='/projects' element={<h1>Project</h1>} />

            </Routes>
              
             <About />
<Projectss  />
<Skills />
<Contact />
  </>
            
        }



      </BrowserRouter>

    </div>
  )
}

export default App