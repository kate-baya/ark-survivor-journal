import React from 'react'
import {Rout, Link} from 'react-router-dom'


export default class TamedDinos extends React.Component {
    render () {
        return (
            <div className="container">
                <h1>Tamed Dinos</h1>
                <p>Add New Dino</p>
                <div className="row">
                    <div className="one-third column border">
                        Dino list
                    </div>
                    <div className="one-third column border">
                        Chosen dino
                    </div>
                    <div className="one-third column border">
                        Dino to compare
                    </div>
                </div>                 
            </div>
        )
    }
}