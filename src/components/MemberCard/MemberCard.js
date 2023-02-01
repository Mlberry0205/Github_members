import React from 'react'
import './MemberCard.css'

const MemberCard = ({avatar, userName, link, id, repo}) => {
  return (
    <div className='card' id={id}>
      <img className='image' src={avatar}/>
      <h3 className='title'>{userName}</h3>
      <h3 className='link'>{link}</h3>
      <p className='link'>{repo}</p>
    </div>
  )
}

export default MemberCard