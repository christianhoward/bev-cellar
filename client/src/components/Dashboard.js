import React, { Component } from 'react';

import BevsList from './BevsList';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        } 
    }
    filterBevs(e) {
        this.setState({ searchText: e.target.value})
    }
    render() {
        return (
            <div className="container">
                <input type="search" value={this.state.searchText} onChange={this.filterBevs.bind(this)} placeholder="Search Bevs..." />
                <BevsList searchText={this.state.searchText} />
            </div>
        );
    }
}

export default Dashboard;