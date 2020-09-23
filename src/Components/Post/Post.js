import React, {Component} from 'react'
import { connect } from 'react-redux'
import Form from '../Form/Form'

class Post extends Component {
    constructor(){
    super()

    this.state ={
        isEditing: false
    }
  }

  toggleEdit = () => {
      this.setState({
          isEditing: !this.state.isEditing
      })
  }


    
    render() {             
        return this.state.isEditing ? (
           <Form 
           handleEdit={this.props.handleEdit}
           handleDelete={this.props.handleDelete}
           post={this.props.post}
           toggleEdit={this.toggleEdit}
            />
        ) : (
            <div>
                <h3> {this.props.post.title} </h3>
                <div>
                    <p> by {this.props.post.author_id} </p>
                    <p> src={this.props.post.img} </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => (reduxState)

export default connect(mapStateToProps)(Post)