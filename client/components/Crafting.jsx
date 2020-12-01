import React from 'react'
import CraftingIngredients from './CraftingIngredients'
import PlayerInventory from './PlayerInventory'
import {Link, Route} from 'react-router-dom'
import {getCrafting} from '../apis/craftingApi'
import {receiveCrafting} from '../actions/index'
import { connect } from 'react-redux'

class Crafting extends React.Component {

    componentDidMount = () => {
        getCrafting()
        .then(item => {
            this.props.dispatch(receiveCrafting(item))
        })
        .catch(err => {
            console.log(err)
        })
    }

  
    render() {
        return (
            <div className="container spacing">
                <h1>Crafting 🪚</h1>
                    <div className="row">
                        <div className="one-third column border boxpad">
                            <h5>Items to Craft</h5>
                                <ul className="list">
                                    {this.props.crafting.map((item, id) => {
                                        return <li key={id}><Link to={`/crafting/${item.id}`}>{item.name}</Link></li>
                                    })}
                                </ul>
                        </div>
                        <div className="one-third column border boxpad">
                            <div className="row">
                                <h5>Crafting Recipe</h5>
                                <Route path={`/crafting/:id`} component={CraftingIngredients} />
                            </div>
                            <div className="row">
                                <h5>Player Inventory</h5>
                                <Route path={`/crafting/:id`} component={PlayerInventory} />
                            </div>
                        </div>
                        <div className="one-third column border boxpad">
                            <h5>Items Needed</h5>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        crafting: state.crafting
    }
}

export default connect(mapStateToProps)(Crafting)