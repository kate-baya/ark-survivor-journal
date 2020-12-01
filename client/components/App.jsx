import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {getDinos} from '../apis/dinoApi'
import {getInventory} from '../apis/inventoryApi'
import {receiveDinos, receiveInventory} from '../actions/index'
import {connect} from 'react-redux'

import Home from './Home'
import Nav from './Nav'
import TamedDinos from "./TamedDinos"
import Recipes from './Recipes'
import Crafting from './Crafting'
import Inventory from './Inventory'
import Register from './Register'
import AddTame from './AddTame'
import AddInventory from './AddInventory'

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
      <Nav />
      <Route path ="/" exact={true} component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/tamedDinos" component={TamedDinos}/>
      <Route path='/recipes' component={Recipes} />
      <Route path='/crafting' component={Crafting} />
      <Route path='/inventory' component={() => <Inventory reloadInventory={this.reloadInventory} />} />
      <Route path="/addTame" component={AddTame} />

      {/* <h1>Ark Survival Journal</h1>
      <div Nav>
      <p>Tamed Dinos</p>
      <p>Recipe List</p>
      <p>Todos</p>
      <p>Tribe Info</p>
      <p>Raids</p>
      </div>
      <div Tamed Dinos>
        <div>Dino List</div>
        <p>Dino stats</p>
        <p>Dino rank</p>
        <div>Add Dino</div>
      </div>
      <div>Recipe List</div>
      <div>Todos</div>
      <div Tribe Info>
        <p>Tribe Member List</p>
        <p>Tribe Log</p>
      </div>
      <div Raids>
        <p>Past Raids</p>
        <p>Current Raids</p>
        <p>Future Raids</p>
        <p>Raided By (Enemy Intel)</p>
      </div> */}
      </div>
      </Router>
    )
  }
}

export default connect()(App)