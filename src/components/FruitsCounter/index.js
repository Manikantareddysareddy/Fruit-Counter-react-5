import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMango = () => {
    this.setState(pervState => ({count1: pervState.count1 + 1}))
  }

  onBanana = () => {
    this.setState(pervState => ({count2: pervState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="spanElement">{count1}</span> mangoes{' '}
            <span className="spanElement">{count2}</span> bananas
          </h1>
          <div className="main-container">
            <div className="sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="image"
              />
              <button className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
