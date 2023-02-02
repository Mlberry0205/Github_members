import React from 'react'
import './MembersContainer.css'
import MemberCard from '../MemberCard/MemberCard'

const MembersContainer = ({ members }) => {
  const tenMemberCards = members?.map(result => {
    return (
      <MemberCard
        userName={result.login}
        link={result.html_url}
        avatar={result.avatar_url}
        id={result.id}
        key={result.id}
      />
    )
  })
  return (
    <div className='members-container'>
      { tenMemberCards }
    </div>
  )
}

export default MembersContainer