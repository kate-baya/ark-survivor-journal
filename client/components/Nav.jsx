import React from 'react'
import {Route, Link} from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOff } from 'authenticare/client'

export default class Nav extends React.Component {
    render () {
        const handleClick = (e) => {
            logOff()
            document.location.reload()
        }
        return (
                <div className="flex">
                    <IfNotAuthenticated>
                        <Link to="/">Sign In</Link>
                        <Link to="/register">Register</Link>
                    </IfNotAuthenticated>
                    <IfAuthenticated>
                        <Link to="/" onClick={handleClick}>Log Off</Link>
                        <Link to="/tamedDinos">Tames</Link>
                        <Link to='/inventory'>Inventory</Link>
                        <Link to="/recipes">Recipes</Link>
                        <Link to="/crafting">Crafting</Link>
                    </IfAuthenticated>
                </div>  
        )
    }
}