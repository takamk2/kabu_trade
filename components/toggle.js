import React from 'react'

export default class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
    }
  }

  handleClick = (id) => {
    console.log(id)
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return <button onClick={() => this.handleClick(1)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
  }
}
