const React = require('react');

class YouTubeDebugger extends React.Component {

  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
          }
      }
    }
    this.changeBitrate = this.changeBitrate.bind(this)
    this.changeResolution = this.changeResolution.bind(this)
  }

  changeBitrate() {
     this.setState({
       settings: Object.assign({}, this.state.settings, {
         bitrate: 12,
       }),
     })
   }

   changeResolution() {
     this.setState({
       settings: Object.assign({}, this.state.settings, {
         video: Object.assign({}, this.state.video, {
           resolution: '720p',
         }),
       })
     })
   }

  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.changeBitrate} >Bitrate</button>
        <button className='resolution' onClick={this.changeResolution} >Resolution</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
