import React from 'react'
import DinoList from './DinoList'
import ChosenDino from './ChosenDino'
import DinoToCompare from './DinoToCompare'
import {Route, Link} from 'react-router-dom'


export default class TamedDinos extends React.Component {
    render () {
        return (
            <div className="container">
                <h1>Tamed Dinos</h1>
                <p>Add New Dino</p>
                <div className="row">
                    <div className="one-third column border">
                        Dino list
                        <Route path="/tamedDinos" component={DinoList} />
                    </div>
                    <div className="one-third column border">
                        Chosen dino
                        <Route path='/tamedDinos/:id' component={ChosenDino} />
                    </div>
                    <div className="one-third column border">
                        Dino to compare
                        <Route path='/tamedDinos/:id/:id2' component={DinoToCompare} />
                    </div>
                </div>                 
            </div>
        )
    }
}