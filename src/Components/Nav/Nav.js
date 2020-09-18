import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {

    
    render() {
        console.log('im a prop', this.props)
        console.log('profile pic test', this.props.user.profilePicture)
        return (
            <div>
                Nav
                <img src={this.props.profilePicture} alt='profile picture'/>
                {this.props.user.username}
                <Link to='/dashboard'>
                    <button> Home </button>
                </Link>
                <Link to='/new'>
                    <button> New Post </button>
                </Link>
                <Link to='/'>
                    <button> Logout </button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    user: reduxState
    
})

export default connect(mapStateToProps)(Nav)
