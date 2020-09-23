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
        this.props.handleEdit(this.props.post.id, this.state.userInput)
        this.props.toggleEdit()
    }

    
    render() {

        return (
            <div>
                <div>
                    <input value={this.state.userInput}
                      onChange={(e) => { this.handleChange(e) }} />
                </div>
                <div>
                    <button onChange={() => { this.handleCancel() }}>
                        Cancel
                    </button>
                    <button onChange={() => { this.handleSave() }}>
                        Save
                    </button>
                </div>

            </div>
        )
    }
}