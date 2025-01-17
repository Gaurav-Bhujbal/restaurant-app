import './index.css'
import FoodItem from '../FoodItem'

const FoodCard = ({foodCardData, addDishToCart}) => (
  <ul>
    {foodCardData.map(each => (
      <FoodItem key={each.dish_id} addDishToCart={addDishToCart} data={each} />
    ))}
  </ul>
)

export default FoodCard
