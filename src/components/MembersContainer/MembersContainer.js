import React, { useState } from 'react'
import './MembersContainer'

const MembersContainer = () => {
  const tenMemberCards = members.map(result => {
    return (
      <MemberCard
       userName={result.login}
        link={result.url}
        avatar={result.avatar_url}
        name={result.name}
        location={result.location}
        email={result.email}
        repo={result.public_repos}
        id={result.id}
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