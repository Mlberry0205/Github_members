import React from 'react'
import './MemberCard.css'

const MemberCard = ({avatar, userName, link, id, repo, name}) => {
  return (
    <div className='card' id={id}>
      <img className='image' alt='avatar' src={avatar}/>
      <h3 className='title'>{userName}</h3>
      <h3 className='link'>{link}</h3>
      <p className='repo'>{repo}</p>
      {/* <p className='name'>{name}</p> */}
    </div>
  )
}

export default MemberCard