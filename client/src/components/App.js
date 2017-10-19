import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';
import Landing from './Landing';
import Dashboard from './Dashboard';
import BevForm from './BevForm';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Nav />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/form" component={BevForm} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

//not using mapStateToProps, so null is the first value for the connect function
export default connect(null, actions)(App);
