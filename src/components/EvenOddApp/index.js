import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(preState => ({
      count: preState.count + Math.floor(Math.random() * 10 + 1),
    }))
  }

  render() {
    const {count} = this.state
    const Text = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg">
        <div className="card">
          <div className="Inner">
            <h1>Count {count}</h1>
            <p>Count is {Text}</p>
            <button type="button" className="btn" onClick={this.onIncrement}>
              Increment
            </button>
            <p>Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
