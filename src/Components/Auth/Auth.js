import React, {Component} from 'react'
import axios from 'axios'

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleLogin = () => {
        const {username, password} = this.state
        axios.post()
    }
    
    render() {

        return (
            <div>
                
                <div>
                  Username:
                  <input 
                  name='username' 
                  onChange={(e) => {
                    this.handleInput(e)
                  }} />
                  Password:
                  <input 
                  type='password' 
                  name='password'
                  onChange={(e) => {
                      this.handleInput(e)
                  }} />
                </div>
                <div>
                    <button> Login </button>
                    <button> Register </button>
                </div>
            
            </div>
        )
    }
}