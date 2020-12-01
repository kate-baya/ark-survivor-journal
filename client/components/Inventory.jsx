import React from 'react'
import {Link, Route} from 'react-router-dom'
import {getInventory} from '../apis/inventoryApi'
import { connect } from 'react-redux'
import { receiveInventory } from '../actions/index'
import AddInventory from './AddInventory'

class Inventory extends React.Component { 

    componentDidMount () {
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
            <div className="container spacing">
                <h1>Tribe Inventory 🎒</h1>
                <Link to="inventory/addInventory"><p>Add Inventory</p></Link>
                <Route path='inventory/addInventory'>
                    <AddInventory reloadInventory={this.reloadInventory}/>
                </Route>
                <h5>Stock List</h5>
                <ul className="list">
                {this.props.inventory.map((inventory, id) => {
                    return <li key={id}>{inventory.item} {inventory.amount}</li>
                })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory
    }
}

export default connect(mapStateToProps)(Inventory)