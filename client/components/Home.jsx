import React from 'react'
import PlayerInventory from './PlayerInventory'
import {Route} from 'react-router-dom'

export default class Home extends React.Component {
    render () {
        return (
            <div className="container">
                 <h1 className="title">Ark Survival Journal &nbsp; 🦕</h1>
                <div className="home">                  
                    <h3>Welcome</h3> 
                    <p>Please sign in to continue</p>
                    <p>PLACE FORM HERE</p>
                </div>
            </div>    
        )
    }
}