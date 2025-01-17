import './index.css'
import {IoCartOutline} from 'react-icons/io5'

const Header = ({cartItemsCounter}) => (
  <div className="header-bg">
    <h1 className="app-name">UNI Resto Cafe</h1>
    <div className="cart-container">
      <p className="my-order-text">My Orders</p>
      <IoCartOutline size={30} />
      <span className="cart-couner">{cartItemsCounter}</span>
    </div>
  </div>
)

export default Header
