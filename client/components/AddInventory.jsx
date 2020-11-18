import React from 'react'

export default class addDino extends React.Component {

    handleChange(event) {
        this.setState({})
    }

    handleSubmit (event) {
        this.reloadInventory()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Item:
                    <input type="text" name="item" value={this.state.inventory.item} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Amount:
                    <input type="text" name="amount" value={this.state.inventory.amount} onChange={this.handleChange} />
                    </label>
                    <input type ="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

//on handle submit I post data to the api
//api is post (to save the data)