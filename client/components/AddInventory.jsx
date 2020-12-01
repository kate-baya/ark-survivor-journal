import React from 'react'
import {connect} from 'react-redux'
import {saveInventory} from '../apis/inventoryApi'

class AddInventory extends React.Component {
    state = {
        item: '',
        amount: 0
    }

    handleChange = (e) => {
        const {name, value} = e.target
        return this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { item, amount} = this.state
        saveInventory(this.state, this.props.dispatch)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Item:
                    <input type="text" name="item" value={this.state.item} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Amount:
                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
                    </label>
                    <input type ="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default connect()(AddInventory)