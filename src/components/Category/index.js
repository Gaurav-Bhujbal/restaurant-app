import './index.css'
import CategoryItem from '../CategoryItem'

const Category = ({data, changeMenu, selectedMenuId}) => {
  const renderCategoryView = () => (
    <ul className="category-items-list-container">
      {data.map(each => (
        <CategoryItem
          key={each.menu_category_id}
          changeMenu={changeMenu}
          item={each}
          isSeleceted={selectedMenuId === each.menu_category_id}
        />
      ))}
    </ul>
  )

  return <div className="category-bg">{renderCategoryView()}</div>
}

export default Category
