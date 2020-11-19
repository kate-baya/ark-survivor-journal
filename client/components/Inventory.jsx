import React from 'react'
import {Link, Route} from 'react-router-dom'
// import playerInventory from '../data/playerInventory'
import {getInventory} from '../api'
import AddInventory from './AddInventory'

export default class Inventory extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            inventory: []
        }
    }   

    componentDidMount () {
        this.reloadInventory()
    }

    reloadInventory = () => {
        getInventory()
        .then(items => {
            this.setState({inventory: items})
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
    }
 
    render () {
        return (
            <div className="container spacing">
                <h1>Tribe Inventory 🎒</h1>
                <Link to="inventory/addInventory"><p>Add Inventory</p></Link>
                <Route path='inventory/addInventory'>
                    <AddInventory reloadInventory={this.reloadInventory}/>
                </Route>
                <h5>Stock List</h5>
                <ul className="list">
                {this.state.inventory.map((inventory, id) => {
                    return <li key={id}>{inventory.item} {inventory.amount}</li>
                })}
                </ul>
            </div>
        )
    }
}