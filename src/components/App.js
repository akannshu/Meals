import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar} from '../actions'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}
function mapStateToProps(calendar) {
  return {
    calendar: Object.keys(calendar)
      .map((day) => ({
        day,
        meals: Object.assign({},calendar[day])}
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
