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
        axios.post('/api/auth/login', {username, password})
        .then((res) => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
    }

    handleRegister = () => {
        const {username, password} = this.state
        axios.post('/api/auth/register', {username, password}).then((res) => {
            this.props.loginUser(res.data)
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

            {/* //Consider wrapping buttons with Link that also has t='route-suffx' */}

                    <button onClick={() => this.handleLogin()} > Login </button>
                    
                    <button onClick={() => this.handleRegister()}> Register </button>
                </div>
            
            </div>
        )
    }
}