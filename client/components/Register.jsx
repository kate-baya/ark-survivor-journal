import React from 'react'
import { register, isAuthenticated } from 'authenticare/client'



export default class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        return register({ username, password })
            .then((token) => {
                if (isAuthenticated()){
                    this.props.history.push('/')
                }
                return null
            })
    }

    render () {
        return (
            <div className="container">
                    <h1 className="title">Ark Survival Journal &nbsp; 🦕</h1>
                    <div className="home">                  
                        <h3>Welcome</h3> 
                        <p>Please register to continue</p>
                        <form onSubmit={this.handleSubmit}>
                        <label>
                        <p>User (or Tribe) Name: </p>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </label>
                        <label>
                        <p>Password:</p> 
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Register"></input>
                    </form>
                    </div>
                </div>  
        )
    }
}