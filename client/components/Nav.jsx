import React from 'react'
import {Route, Link} from 'react-router-dom'

export default class Nav extends React.Component {
    render () {
        return (
                <div className="container flex">
                    <Link to="/">Ark Survival Journal</Link>
                    <Link to="/tamedDinos">Tamed Dinos</Link>
                    <Link to='/inventory'>Inventory</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/crafting">Crafting</Link>
                </div>
        )
    }
}