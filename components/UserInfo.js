import React from 'react'
import Avator from './avatar'

export default function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avator user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  )
}
