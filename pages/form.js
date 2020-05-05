import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kaine: null,
      urineMondayAM: null,
      urineMondayPM: null,
      urineTuesdayAM: null,
      urineTuesdayPM: null,
      urineWednesdayAM: null,
      urineWednesdayPM: null,
      urineThursdayAM: null,
      urineThursdayPM: null,
      urineFridayAM: null,
      urineFridayPM: null,
      urineSaturdayAM: null,
      urineSaturdayPM: null,
    }
  }

  handleKaineChange = (event) => {
    this.setState({ kaine: event.target.value })
  }

  handleUrineChange = (event, name) => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    return (
      <>
        <h2>買値</h2>
        <input type="number" value={this.state.kaine} onChange={this.handleKaineChange} />
        <h2>売値</h2>
        <table>
          <tr>
            <td rowSpan={2}>月</td>
            <td>AM</td>
            <td>
              <input
                type="number"
                value={this.state.urineMondayAM}
                onChange={(e) => this.handleUrineChange(e, 'urineMondayAM')}
              />
            </td>
          </tr>
          <tr>
            <td>PM</td>
            <td>
              <input
                type="number"
                value={this.state.urineMondayPM}
                onChange={(e) => this.handleUrineChange(e, 'urineMondayPM')}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>火</td>
            <td>AM</td>
            <td>
              <input
                type="number"
                value={this.state.urineTuesdayAM}
                onChange={(e) => this.handleUrineChange(e, 'urineTuesdayAM')}
              />
            </td>
          </tr>
          <tr>
            <td>PM</td>
            <td>
              <input
                type="number"
                value={this.state.urineTuesdayPM}
                onChange={(e) => this.handleUrineChange(e, 'urineTuesdayPM')}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>水</td>
            <td>AM</td>
            <td>
              <input
                type="number"
                value={this.state.urineWednesdayAM}
                onChange={(e) => this.handleUrineChange(e, 'urineWednesdayAM')}
              />
            </td>
          </tr>
          <tr>
            <td>PM</td>
            <td>
              <input
                type="number"
                value={this.state.urineWednesdayPM}
                onChange={(e) => this.handleUrineChange(e, 'urineWednesdayPM')}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>木</td>
            <td>AM</td>
            <td>
              <input
                type="number"
                value={this.state.urineThursdayAM}
                onChange={(e) => this.handleUrineChange(e, 'urineThursdayAM')}
              />
            </td>
          </tr>
          <tr>
            <td>PM</td>
            <td>
              <input
                type="number"
                value={this.state.urineThursdayPM}
                onChange={(e) => this.handleUrineChange(e, 'urineThursdayPM')}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>金</td>
            <td>AM</td>
            <td>
              <input
                type="number"
                value={this.state.urineFridayAM}
                onChange={(e) => this.handleUrineChange(e, 'urineFridayAM')}
              />
            </td>
          </tr>
          <tr>
            <td>PM</td>
            <td>
              <input
                type="number"
                value={this.state.urineFridayPM}
                onChange={(e) => this.handleUrineChange(e, 'urineFridayPM')}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>土</td>
            <td>AM</td>
            <td>
              <input
                type="number"
                value={this.state.urineSaturdayAM}
                onChange={(e) => this.handleUrineChange(e, 'urineSaturdayAM')}
              />
            </td>
          </tr>
          <tr>
            <td>PM</td>
            <td>
              <input
                type="number"
                value={this.state.urineSaturdayPM}
                onChange={(e) => this.handleUrineChange(e, 'urineSaturdayPM')}
              />
            </td>
          </tr>
        </table>
      </>
    )
  }
}
