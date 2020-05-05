import React from 'react'
import InputText from '../../components/input-text'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
    }
  }

  handleInputTextChange = (value) => {
    this.setState({ inputText: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(this.state.inputText)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <InputText value={this.state.inputText} onChange={this.handleInputTextChange} />
          <ul>
            <li>InputText: {this.state.inputText}</li>
          </ul>
          <button type="submit">送信</button>
        </form>
      </>
    )
  }
}
