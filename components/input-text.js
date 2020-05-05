import React from 'react'
import PropTypes from 'prop-types'

export default class InputText extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    return <input type="text" value={this.props.value} onChange={this.handleChange} />
  }
}

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
