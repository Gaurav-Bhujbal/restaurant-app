import './App.css'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Category from './components/Category'
import FoodCard from './components/FoodCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const App = () => {
  const [data, setData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress)
  const [selectedMenuId, setSelectedMenuId] = useState('')
  const [cartItemsCounter, setCartItemsCounter] = useState(0)

  useEffect(async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const responseData = await response.json()
    setData(responseData[0].table_menu_list)
    setSelectedMenuId(responseData[0].table_menu_list[0].menu_category_id)
    setApiStatus(apiStatusConstants.success)
  }, [])

  const changeMenu = item => {
    setSelectedMenuId(item.menu_category_id)
  }

  const addDishToCart = value => {
    if (value === 1) {
      setCartItemsCounter(prevState => prevState + 1)
    } else if (cartItemsCounter > 0) {
      setCartItemsCounter(prevState => prevState - 1)
    }
  }

  const renderPageView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <p>Loading...</p>
        break
      case apiStatusConstants.success:
        let foodCardData
        data.forEach(each => {
          if (each.menu_category_id === selectedMenuId) {
            foodCardData = each.category_dishes
          }
        })
        return (
          <>
            <Header cartItemsCounter={cartItemsCounter} />
            <Category
              selectedMenuId={selectedMenuId}
              changeMenu={changeMenu}
              data={data}
            />
            <FoodCard
              addDishToCart={addDishToCart}
              foodCardData={foodCardData}
            />
          </>
        )
        break
      case apiStatusConstants.failure:
        return <p>Error, Please try again...</p>
        break
    }
  }
  return <div className="main-bg-container">{renderPageView()}</div>
}

export default App
