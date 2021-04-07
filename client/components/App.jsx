import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getDinos} from '../apis/dinoApi'
import {getInventory} from '../apis/inventoryApi'
import {receiveDinos, receiveInventory} from '../actions/index'
import {connect} from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'


import Home from './Home'
import Nav from './Nav'
import TamedDinos from "./TamedDinos"
import Recipes from './Recipes'
import Crafting from './Crafting'
import Inventory from './Inventory'
import Register from './Register'
import AddTame from './AddTame'

class App extends React.Component {

  componentDidMount () {
    getDinos()
        .then(dinos => {
            this.props.dispatch(receiveDinos(dinos))
        })
        .catch(err => {
            console.log(err)
        }) 
    this.reloadInventory()    
  }

  reloadInventory = () => {
      getInventory()
      .then(inv => {
          this.props.dispatch(receiveInventory(inv))
      })
      .catch(err => {
          console.log(err)
      })
  }

  render () {
    return (
      <Router>
      <div className="app">
      <IfAuthenticated>
      <Nav />
      <Route path ="/" exact={true} component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/tamedDinos" component={TamedDinos}/>
      <Route path='/recipes' component={Recipes} />
      <Route path='/crafting' component={Crafting} />
      <Route path='/inventory' component={() => <Inventory reloadInventory={this.reloadInventory} />} />
      <Route path="/addTame" component={AddTame} />
      </IfAuthenticated>
      </div>
      </Router>
    )
  }
}

export default connect()(App)