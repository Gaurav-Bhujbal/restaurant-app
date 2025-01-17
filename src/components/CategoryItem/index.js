import './index.css'

const CategoryItem = props => {
  const {item, changeMenu, isSeleceted} = props

  const changeMenuId = () => {
    changeMenu(item)
  }

  const selectedMenuClassName = isSeleceted ? 'selected' : null

  return (
    <li>
      <button
        className={`category-item-btn ${selectedMenuClassName}`}
        onClick={changeMenuId}
      >
        {item.menu_category}
      </button>
    </li>
  )
}

export default CategoryItem
