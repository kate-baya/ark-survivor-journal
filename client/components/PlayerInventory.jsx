import React from 'react'
import recipes from '../data/recipes'
import {getInventory} from '../apis/inventoryApi'
import {receiveInventory} from '../actions/index'
import {connect} from 'react-redux'

class PlayerInventory extends React.Component {

    componentDidMount () {
        getInventory()
            .then(inv => {
                this.props.dispatch(receiveInventory(inv))
            })
            .catch(err => {
                res.status(500).send(err.message)
            })
    }
    
        recipe = recipes.find(recipe => {
            return recipe.id == this.props.match.params.id
        })

        render () {
        return (
            <div>
                <ul className="list">
                    {this.recipe && this.props.inventory.map((item, id) => {
                        return <li key={id}>{item.item} {item.amount}</li>
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

export default connect(mapStateToProps)(PlayerInventory)