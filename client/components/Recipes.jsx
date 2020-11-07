import React from 'react'

export default class Recipies extends React.Component {
        render() {
            return (
                <div className="container">
                    <h1>Recipies</h1>
                        <div className="row">
                            <div className="one-third column border">
                                <p>Recipie navigation</p>
                            </div>
                            <div className="one-third column border">
                                <div className="row">
                                    <p>Recipe</p>
                                </div>
                                <div className="row">
                                    <p>Current inventory of recipe items</p>
                                </div>
                            </div>
                            <div className="one-third column border">
                                <p>Items needed and where to source them</p>
                            </div>
                        </div>
                </div>
            )
        }
}