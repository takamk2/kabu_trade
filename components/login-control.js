import React from 'react'
import Greeting from './greeting'

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    const button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton onClick={this.handleLoginClick} />
    )

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}
