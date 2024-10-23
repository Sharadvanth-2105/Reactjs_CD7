// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, btnClick} = props
  const {value, id} = itemDetails

  const onDecrement = () => {
    btnClick(id)
  }

  return (
    <li>
      <button className="btn" onClick={onDecrement}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
