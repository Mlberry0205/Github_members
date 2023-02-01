import React, { useEffect, useState } from 'react'
import './App.css'
import logo from '../../Images/logo.png'
import { getMembers } from '../../apiCalls'

const App = () => {
  const [members, setMembers] = useState(null)

  useEffect(() => {
    const getMemberData = () => {
      getMembers()
      .then(response => {setMembers(response)})
      .catch(response => response)
    }
    getMemberData()
  }, [])

  return (
    <div>
      <nav className='nav-bar'>
       <img className='logo-image' alt='logo design' src={logo}/>
      </nav>
      <main>
        <h1>HELLO</h1>
      </main>
      <footer className='footer-container'>
        <p className='footer'>&#169; <a href='https://github.com/Mlberry0205'>Morgan Berry</a></p>
      </footer>
    </div>
  )
}

export default App
