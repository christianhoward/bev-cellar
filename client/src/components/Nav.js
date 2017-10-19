import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [
                    <li key="1"><a href='/form'>Add Bev</a></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper brown darken-4">
                    <Link 
                        to={this.props.auth ? '/dashboard' : '/'}
                        className="left brand-logo"
                        style={{ margin: '0 10px' }}
                    >Bev Cellar</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);