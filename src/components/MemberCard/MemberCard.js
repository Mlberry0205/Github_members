import React from 'react'
import './MemberCard.css'

const MemberCard = ({avatar, name}) => {
  return (
    <div>
      <img className='image' src={avatar}/>
      <h3 className='title'>{name}</h3>
    </div>
  )
}