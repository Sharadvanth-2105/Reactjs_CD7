// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  btnClick = id => {
    if (id === 1) {
      this.setState(prevState => ({balance: prevState.balance - 50}))
    }
    if (id === 2) {
      this.setState(prevState => ({balance: prevState.balance - 100}))
    }
    if (id === 3) {
      this.setState(prevState => ({balance: prevState.balance - 200}))
    }
    if (id === 4) {
      this.setState(prevState => ({balance: prevState.balance - 500}))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="main">
          <div className="card-1">
            <button className="icon">S</button>
            <h1 className="head-1">Sarah Williams</h1>
          </div>
          <div className="card-2">
            <p className="para-1">Your balance</p>
            <p className="para-2">{balance}</p>
          </div>
          <p className="para-3">In Rupees</p>
          <p className="head-2">Withdraw</p>
          <p className="para-4">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                itemDetails={eachDenomination}
                btnClick={this.btnClick}
                key={eachDenomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
