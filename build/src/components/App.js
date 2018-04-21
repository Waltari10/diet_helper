
import React, { Component } from 'react'
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import FoodList from './FoodList/index.js'
import LanguagePicker from './LanguagePicker/index.js'
import './App.css'

class App extends Component {
  myForceUpdate () {
    this.forceUpdate()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <LanguagePicker
          forceUpdate={this.myForceUpdate.bind(this)}
        />
        <FoodList />
        <Footer />
      </div>
    )
  }
}

export default App;