import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBevs } from '../actions';

class BevsList extends Component {
    componentDidMount() {
        this.props.fetchBevs();
    }
    renderBevs() {
        return this.props.bevs.map(bev => {
            return (
                <div key={bev._id} className="card darken-1">
                    <div className="card-content">
                        <span className="card-title">{bev.name}</span>
                        <p>
                            {bev.notes}
                        </p>
                        <p className="right">Date Added: {new Date(bev.createdOn).toLocaleDateString()}</p>
                        <br />
                        <p className="right">Last Updated: {new Date(bev.lastUpdatedOn).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action" style={{paddingBottom: '25px'}}>
                        <a>Quantity: {bev.quantity}</a>
                        <a>Location: {bev.location}</a>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                {this.renderBevs()}
            </div> 
        );
    };
}

function mapStateToProps({ bevs }) {
    return { bevs };
}

export default connect(mapStateToProps, { fetchBevs })(BevsList);