import React, {Component} from 'react'
import Post from '../Post/Post'

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
        }
    }

    componentDidMount() {
        this.setState({
            userInput: this.props.post.content
        })
    }

    handleCancel = () => {
        this.props.toggleEdit()
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    handleSave = () => {
        this.props.handleEdit(this.props.post.iod, this.state.userInput)
        this.props.toggleEdit()
    }

    
    render() {

        return (
            <div>
                Form

                

            </div>
        )
    }
}