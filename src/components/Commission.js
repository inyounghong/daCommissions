import React, { Component } from 'react';

class Commission extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="commission">
                <div className="username">{this.props.data.username}</div>
                <div className="price">{this.props.data.price}</div>
            </div>
        );
    }
}

export default Commission;
