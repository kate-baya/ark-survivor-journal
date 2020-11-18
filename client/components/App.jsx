import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import TamedDinos from "./TamedDinos"
import Recipes from './Recipes'
import Crafting from './Crafting'
import Inventory from './Inventory'

const App = () => {
  return (
    <Router>
    <>
    <Nav />
    <Route path ="/" exact={true} component={Home} />
    <Route path="/tamedDinos" component={TamedDinos}/>
    <Route path='/recipes' component={Recipes} />
    <Route path='/crafting' component={Crafting} />
    <Route path='/inventory' component={Inventory} />
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
    </>
    </Router>
  )
}

export default App
