import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import formFields from './formFields';
import BevField from './BevField';
import { submitBev, updateBev } from '../actions'


class BevForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field key={name} component={BevField} type="text" label={label} name={name} />
            );
        });
    }
    onSubmit(bev) {
        if (bev._id) {
            this.props.updateBev(bev);
            this.props.history.push('/dashboard');
        } else {
            this.props.submitBev(bev);
            this.props.history.push('/dashboard');
        }
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(props => this.onSubmit(props))}>
                    <input type="hidden" name="_id" />
                    {this.renderFields()}
                    <button className="btn brown darken-4 right">Submit</button>
                </form>
            </div>
        );
    }
};

function mapStateToProps(state, props) {
    return {
        initialValues: state.bevs.find(bev => bev._id === props.match.params.id)
    }
}

export default connect(mapStateToProps, { submitBev, updateBev })(reduxForm({
    form: 'bevForm'
})(BevForm));