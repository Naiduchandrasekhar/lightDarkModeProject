// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    modeText: 'Light Mode',
    className: 'darkTheme',
    heading: 'whiteColor',
  }

  onModeClick = () => {
    const {modeText} = this.state
    if (modeText === 'Light Mode') {
      this.setState(() => ({
        modeText: 'Dark Mode',
        className: 'lightTheme',
        heading: 'blackColor',
      }))
    } else {
      this.setState(() => ({
        modeText: 'Light Mode',
        className: 'darkTheme',
        heading: 'whiteColor',
      }))
    }
  }

  render() {
    const {modeText, className, heading} = this.state
    return (
      <div className="bg-container">
        <div className={className}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onModeClick}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
