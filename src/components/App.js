import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar} from '../actions'
import { capitalize } from '../utils/helper'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'
import modal from 'react-modal'
import ArrowRightIcon from 'react-icons/lib/fa/arrow-circle-right'
import Loading from 'react-loading'
import { fetchRecipes } from '../utils/api'
import Foodlist from './Foodlist'

class App extends Component {
  state = {
    foodModalOpen: false,
    meal: null,
    day: null,
    food: null
  }
  render() {
    const { calendar, remove } = this.props
    const mealOrder = ['breakfast', 'lunch', 'dinner']
    return (
      <div className='container'>
        <ul className='meal-types'>
          {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))}
        </ul>
        <div className='calendar'>
          <div className='days'>
            {calendar.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
          </div>
          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='meal'>
                    {meals[meal]
                      ? <div className='food-item'>
                         <img src={meals[meal].image} alt={meals[meal].label}/>
                         <button onClick={() => remove({meal, day})}>Clear</button>
                        </div>
                      : <button className='icon-btn'>
                        <CalendarIcon size={30}/>
                        </button>}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )
      }
    }

function mapStateToProps({calendar, food}) {
  return {
    calendar: Object.keys(calendar)
      .map((day) => ({
        day,
        meals: Object.assign({},food[calendar[day]])}
      ))
  }
}

function mapDispatchToProps(){
  return {
   selectRecipe: addRecipe,
   remove: removeFromCalendar
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
