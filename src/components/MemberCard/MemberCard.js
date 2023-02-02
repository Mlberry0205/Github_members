import React from 'react'
import './MemberCard.css'

const MemberCard = ({avatar, userName, link, pLink, id, repo, name, location, email}) => {
  return (
    <div className='card' id={id}>
      <img className='image' alt='avatar' src={avatar}/>
      <h3 className='title'>{userName}</h3>
      <p className='link'> <a href={link}>Github</a></p>
      <p className='link'> <a href={pLink}>Personal Info</a></p>
      <p className='repo'>{repo}</p>
      <p className='repo'>{location}</p>
      <p className='name'>{name}</p>
      <p className='email'>{email}</p>
    </div>
  )
}

export default MemberCard