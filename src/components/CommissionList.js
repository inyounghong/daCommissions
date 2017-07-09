import React, { Component } from 'react';
import Commission from './Commission';
import axios from 'axios';

class CommissionList extends Component {

    constructor() {
        super();
        this.state = {
            commissions: [
                {username: "Simplysilent", price: 10},
                {username: "Rainylake", price: 20}
            ]
        };
        this.url = "http://localhost:3001/api/commissions";
    }

    componentDidMount() {
        this.loadFromServer();
    }

    loadFromServer() {
        axios.get(this.url)
            .then(res => {
                this.setState({ commissions: res.data });
        })
    }

    render() {
        const commissions = this.state.commissions.map((commission, index) => {
            return (
                <Commission
                    data={commission}
                    key={index}
                />
            )
        });
        return (
            <div>{commissions}</div>
        );
    }
}

export default CommissionList;
