import React from 'react'

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ['grapefruit', 'lime'],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert('Your favorite flavor is: ' + this.state.value)
  }

  handleChange = (event) => {
    let options = []
    for (let i = 0; i < event.target.options.length; i++) {
      options.push(event.target.options[i])
    }
    const value = options.reduce((result, option) => {
      return option.selected ? result.concat(option.value) : result
    }, [])
    this.setState({
      value: value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
