import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state= {
            toBeUpdated: false,
            author: '',
            text: ''
        };

        //binding all our functions to this class
        this.deleteComment = this.deleteComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }

    updateComment(e) {
        this.setState({ toBeUpdated: !this.state.toBeUpdated });
    }

    handleCommentUpdate(e) {
        let id = this.props.uniqueID;
        let author = (this.state.author) ? this.state.author : null;
        let text = (this.state.text) ? this.state.text : null;
        let comment = { author: author, text: text};
        this.props.onCommentUpdate(id, comment);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            author: '',
            text: ''
        })
    }

    deleteComment(e) {
        let id = this.props.uniqueID;
        this.props.onCommentDelete(id);
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }

    render() {
        return (
            <div>
                <h3>{this.props.author}</h3>
                {this.props.children.toString()}
                <span onClick={ this.updateComment }>update</span>
                <span onClick={ this.deleteComment }>delete</span>
                { (this.state.toBeUpdated)
                ? (<form onSubmit={ this.handleCommentUpdate }>
                    <input
                        type='text'
                        placeholder='Update name...'
                        value={ this.state.author }
                        onChange= { this.handleAuthorChange } />
                    <input
                        type='text'
                        placeholder='Update your comment...'
                        value={ this.state.text }
                        onChange={ this.handleTextChange } />
                    <input
                        type='submit'
                        value='Update' />
                </form>)
                : null}
            </div>
        )
    }
}

export default Comment;
