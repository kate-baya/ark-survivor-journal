import React from 'react'
import PlayerInventory from './PlayerInventory'
import {Route} from 'react-router-dom'

export default class Home extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="home">
                    <h1>Welcome</h1> 
                    <p>Please sign in to continue</p>
                    <p>PLACE FORM HERE</p>
                </div>
            </div>    
        )
    }
}