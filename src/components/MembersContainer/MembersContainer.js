import React from 'react'
import './MembersContainer'
import MemberCard from '../MemberCard/MemberCard'

const MembersContainer = ({ members }) => {
  const tenMemberCards = members?.map(result => {
    return (
      <MemberCard
        userName={result.login}
        link={result.url}
        avatar={result.avatar_url}
        // name={result.name}
        // location={result.location}
        // email={result.email}
        repo={result.public_repos}
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