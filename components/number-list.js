import React from 'react'

export default class NumberList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const numbers = this.props.numbers
    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>)
    return <ul>{listItems}</ul>
  }
}
