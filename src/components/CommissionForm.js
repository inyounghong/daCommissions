import React, { Component } from 'react';

class CommissionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            title: '',
            description: '',
            price: null,
            categories: [],
            link: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let username = this.state.username.trim();
        let title = this.state.title.trim();
        if (!title || !username) {
          return;
        }
        // this.props.onCommentSubmit({ username: username, title: title });
        this.setState({ username: '', title: '' });
    }

    addCommission() {

    }

    render() {
        return (
        <form className="form-horizontal" onSubmit={ this.handleSubmit }>
            <div className="form-group">
                <label className="col-sm-2">Username</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2">Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2">Description</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" />
                </div>
                </div>
            <div className="form-group">
                <label className="col-sm-2">Price</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2">Link</label>
                <div className="col-sm-10">
                    <input type="url" className="form-control" />
                </div>
            </div>
            <input type='submit'
                value='Post'
            />
        </form>
        )
    }
}

export default CommissionForm;
