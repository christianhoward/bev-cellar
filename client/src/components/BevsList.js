import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBevs, deleteBev } from '../actions';

class BevsList extends Component {
    componentDidMount() {
        this.props.fetchBevs();
    }
    handleDeleteBev(id) {
        this.props.deleteBev(id);
    }
    renderBevs() {
        if (this.props.bevs.length === 0) {
            return [
                <div key={1} style={{textAlign: 'center'}}>
                    <h3>Welcome to Bev Cellar!</h3>
                    <p>To start tracking your bevs, use the Add Bev link in the nav.</p>
                </div>
            ];
        }
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
                        <button className="btn red darken-2 right" style={{marginLeft: '10px'}} onClick={() => {this.handleDeleteBev(bev._id)}}>Delete</button>
                        <Link to={`/form/${bev._id}`}><button className="btn light-blue darken-2 right" >Update</button></Link>
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

export default connect(mapStateToProps, { fetchBevs, deleteBev })(BevsList);