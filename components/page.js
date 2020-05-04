import React from 'react'

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showWarning: true,
    }
  }

  handleToggleClick = () => {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
      </div>
    )
  }
}

/**
 * @return {null}
 */
function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return <div className="warning">Warning!</div>
}
