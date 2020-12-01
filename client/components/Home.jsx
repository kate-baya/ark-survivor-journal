import React from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { signIn, isAuthenticated } from 'authenticare/client'


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

   handleChange = e => {
       const {name, value } = e.target
       this.setState({
           [name]: value
       })
   }

   handleSubmit = e => {
    const { username, password } = this.state
       return signIn({ username, password})
        .then((token) => {
            if (isAuthenticated()) {
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
                    <IfAuthenticated>
                        <h3>Welcome Back Username!</h3>
                            <p>This is where I put the tribe log from the mythical api lol</p>
                      
                    </IfAuthenticated>
                    <IfNotAuthenticated>              
                    <h3>Welcome</h3> 
                    <p>Please sign in to continue</p>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                       <p>User (or Tribe) Name: </p>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                       <p>Password:</p> 
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type ="submit" value="Submit"></input>
                </form>
                </IfNotAuthenticated>    
                </div>
            </div>    
        )
    }
}