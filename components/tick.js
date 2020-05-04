import React from 'react'

export default class Tick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      isTrue: false
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    )
  }
}
