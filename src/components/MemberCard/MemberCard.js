import React, { useEffect, useState } from 'react'
import './MemberCard.css'
import { getSingleMember } from '../../apiCalls'

const MemberCard = ({avatar, userName, link, id}) => {
const [getUserName, setGetUserName] = useState({})
const {public_repos, name, location, email} = getUserName

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
      <p className='repo'>{name} | {userName}</p>
      <img className='image' alt='avatar' src={avatar}/>
      <p className='link'> <a href={link}>Github</a></p>
      <p className='repo'>{location}</p>
      <p className='repo'>{email}</p>
      <p className='repo'># of public repos: {public_repos}</p>
    </div>
  )
}

export default MemberCard