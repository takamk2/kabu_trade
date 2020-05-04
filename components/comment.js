import React from 'react'
import Avator from './avatar'
import UserInfo from './UserInfo'

export default function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  )
}

function formatDate(date) {
  return date.toLocaleDateString()
}
