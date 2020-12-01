import React from 'react'
import DinoList from './DinoList'
import ChosenDino from './ChosenDino'
import DinoToCompare from './DinoToCompare'
import AddTame from './AddTame'
import {Route, Link} from 'react-router-dom'


export default class TamedDinos extends React.Component {
    render () {
        return (
            <div className="container spacing">
                <h1>Tames 🦖</h1>
                <Link to={'/addTame'}><p>Add New Tame</p></Link>
                <Route path="/addTame" component={AddTame} />
                <div className="row">
                    <div className="one-third column border boxpad">
                        <h5>Tame List</h5>
                        <Route path="/tamedDinos" component={DinoList} />
                    </div>
                    <div className="one-third column border boxpad">
                        <h5>Chosen Tame</h5>
                        <Route path='/tamedDinos/:id' component={ChosenDino} />
                    </div>
                    <div className="one-third column border boxpad">
                        <h5>Tame to Compare</h5>
                        <Route path='/tamedDinos/:id/:id2' component={DinoToCompare} />
                    </div>
                </div>                 
            </div>
        )
    }
}