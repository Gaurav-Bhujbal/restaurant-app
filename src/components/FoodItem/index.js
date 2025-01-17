import './index.css'

import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const FoodItem = ({data, addDishToCart}) => {
  const [dishQuantity, setDishQuantity] = useState(0)
  console.log(data)

  const decreaseQunatity = () => {
    if (dishQuantity > 0) {
      setDishQuantity(prevState => prevState - 1)
      addDishToCart(0)
    }
  }

  const increamentQuantity = () => {
    setDishQuantity(prevState => prevState + 1)
    addDishToCart(1)
  }

  return (
    <li className="foodItem">
      <div className="veg-non-veg-logo-container">
        <p className="veg-non-veg-logo" />
      </div>
      <div className="dish-details-container">
        <h2 className="dish-name">{data.dish_name}</h2>
        <p className="dish-price">
          {data.dish_currency} {data.dish_price}
        </p>
        <p className="dish-description">{data.dish_description}</p>
        {data.dish_Availability ? (
          <div className="dish-quantity-container">
            <button className="decrement-btn" onClick={decreaseQunatity}>
              -
            </button>
            <p className="dish-quantity">{dishQuantity}</p>
            <button className="increment-btn" onClick={increamentQuantity}>
              +
            </button>
          </div>
        ) : (
          <p style={{color: 'red'}}>Not Available</p>
        )}
        {data.addonCat.length > 0 ? (
          <p className="Customizations-text">Customizations availables</p>
        ) : null}
      </div>
      <p className="calories">{data.dish_calories} calories</p>
      <img className="foodItem-image" src={data.dish_image} />
    </li>
  )
}

export default FoodItem
