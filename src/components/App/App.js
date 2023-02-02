import React, { useEffect, useState } from 'react'
import './App.css'
import logo from '../../Images/logo.png'
import { getMembers } from '../../apiCalls'
import MembersContainer from '../MembersContainer/MembersContainer'
import MemberCard from '../MemberCard/MemberCard'

const App = () => {
  const [members, setMembers] = useState([])

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
        <MembersContainer  members={members} />
      </main>
      <footer className='footer-container'>
        <p className='footer'>&#169; <a href='https://github.com/Mlberry0205'>Morgan Berry</a></p>
      </footer>
    </div>
  )
}

export default App
