import React, { useEffect, useState } from 'react'
import './MemberCard.css'
import { getSingleMember } from '../../apiCalls'

const MemberCard = ({avatar, userName, link, id}) => {
const [getUserName, setGetUserName] = useState({})
const {public_repo, name, location, email} = getUserName

  useEffect(() => {
    const getMemberUserName = () => {
       getSingleMember(userName)
      .then(response => {setGetUserName(response)})
      .catch(response => response)
    }
    getMemberUserName()
  }, [])

  return (
    <div className='card' id={id}>
      <img className='image' alt='avatar' src={avatar}/>
      <h3 className='title'>{userName}</h3>
      <p className='link'> <a href={link}>Github</a></p>
      <p className='repo'>{public_repo}</p>
      <p className='repo'>{location}</p>
      <p className='name'>{name}</p>
      <p className='email'>{email}</p>
    </div>
  )
}

export default MemberCard