import React from 'react'

export default class Crafting extends React.Component {
        render() {
            return (
                <div className="container">
                    <h1>Crafting</h1>
                        <div className="row">
                            <div className="one-third column border">
                                <p>Crafting navigation</p>
                            </div>
                            <div className="one-third column border">
                                <div className="row">
                                    <p>Items needed</p>
                                </div>
                                <div className="row">
                                    <p>Current inventory of needed items</p>
                                </div>
                            </div>
                            <div className="one-third column border">
                                <p>Additional items needed and where to source them</p>
                            </div>
                        </div>
                </div>
            )
        }
}