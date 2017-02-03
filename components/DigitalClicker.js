const React = require('react');

class DigitalClicker extends React.Component {

  constructor(){
    super()
    this.state = {timesClicked: 0}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return (<div>
                <button onClick={this.handleChange}>{this.state.timesClicked}</button>
            </div>
          )
  }
}

module.exports = DigitalClicker
