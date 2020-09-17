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
        axios.post('/auth/register', {username, password}).then((res) => {
            //needs to be logged in here
            this.props.history.push('/dashboard')
        })
        .catch((err) => {
            alert(err.message)
        })
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
                    <button onClick={() => this.handleLogin()}> Register </button>
                </div>
            
            </div>
        )
    }
}