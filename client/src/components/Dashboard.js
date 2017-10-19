import React, { Component } from 'react';

import BevsList from './BevsList';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <BevsList />
            </div>
        );
    }
}

export default Dashboard;